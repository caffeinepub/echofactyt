import Time "mo:core/Time";
import Text "mo:core/Text";
import Array "mo:core/Array";
import List "mo:core/List";
import Map "mo:core/Map";
import Principal "mo:core/Principal";
import Runtime "mo:core/Runtime";
import AccessControl "authorization/access-control";
import MixinAuthorization "authorization/MixinAuthorization";

actor {
  let accessControlState = AccessControl.initState();
  include MixinAuthorization(accessControlState);

  // Popular Posts: stored as list of (title, category, viewCount)
  let posts = List.empty<(Text, Text, Nat)>();

  // Admin-only: add a new post
  public shared ({ caller }) func addPost(title : Text, category : Text) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admins can add posts");
    };
    posts.add((title, category, 0));
  };

  // Any visitor (including guests) can increment a post's view count
  public shared ({ caller }) func viewPost(title : Text) : async () {
    let entries = posts.toArray();
    var found = false;
    posts.clear();
    for ((pTitle, category, views) in entries.vals()) {
      if (pTitle == title) {
        posts.add((pTitle, category, views + 1));
        found := true;
      } else {
        posts.add((pTitle, category, views));
      };
    };
    if (not found) {
      Runtime.trap("Post not found");
    };
  };

  // Anyone can read top posts
  public query func getTopPosts() : async [(Text, Text, Nat)] {
    var postsArray = posts.toArray();
    postsArray := postsArray.sort(
      func((_, _, views1) : (Text, Text, Nat), (_, _, views2) : (Text, Text, Nat)) : {#less; #equal; #greater} {
        if (views1 > views2) { #less }
        else if (views1 < views2) { #greater }
        else { #equal };
      }
    );
    let size = postsArray.size();
    let limit = if (size < 5) { size } else { 5 };
    postsArray.sliceToArray(0, limit);
  };

  // New Updates: stored as list of (content, timestamp)
  let updates = List.empty<(Text, Time.Time)>();

  // Admin-only: add a new update/fact/tip
  public shared ({ caller }) func addUpdate(content : Text) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admins can add updates");
    };
    updates.add((content, Time.now()));
  };

  // Anyone can read recent updates
  public query func getRecentUpdates() : async [(Text, Time.Time)] {
    var updatesArray = updates.toArray();
    updatesArray := updatesArray.sort(
      func((_, t1) : (Text, Time.Time), (_, t2) : (Text, Time.Time)) : {#less; #equal; #greater} {
        if (t1 > t2) { #less }
        else if (t1 < t2) { #greater }
        else { #equal };
      }
    );
    let size = updatesArray.size();
    let limit = if (size < 4) { size } else { 4 };
    updatesArray.sliceToArray(0, limit);
  };
};
