const axios = require("axios");

const cookie =
    "i_user=100092309301674; presence=C%7B%22t3%22%3A%5B%5D%2C%22utc3%22%3A1703198565197%2C%22v%22%3A1%7D;fr=1zrCcn8SyUt53oe4a.AWUVbM239EbfasY4cufcqZACS5Q.BlhL9h.Y-.AAA.0.0.BlhL9h.AWX0YR8X7Oc;m_page_voice=100090069069652;c_user=100090069069652;datr=KDFmZLDuTfKYZWFSZW-lrQ4y;sb=KDFmZKoRLvvYU7g6xd78hFCL;wd=383x231;m_pixel_ratio=1;xs=27%3AAX7FSgrnXVT8NQ%3A2%3A1702469756%3A-1%3A11581%3A%3AAcX1xN9PgTCFb70nc0s9HZjS-P8Ge9H5npRcNiFHtw;x-referer=eyJyIjoiL250L3NjcmVlbi8%2FcGFyYW1zPSU3QiUyMnRva2VuJTIyJTNBJTIyQVZpdDQwdHdDX2dwM1ZYNUFSRHltU0tSbkQ5NnlKTFJUUHBIUnl2czROdWZIVFdpSnlJcDRuNHExSXRYRjVnWTdsd3FiWjM5N2hZamh2NWNXLW5LRmIwUGUxSnpiQ1piVXQxOE9Vdm9la0JVYUozTW1LSlZRRlAySlppRnNZMVQ0Q3RKU3B2Yl8xZkxpYngwb1dIMG9qTExyZTNhbkYzTURnclRiRUtyT3VRSC1kbGh0ZTB2RERFZ2VNcHNiVjE1OU0yN2U0dUt1THYzNUlTdjlrUThXeGExd1ljc0pTeDNYclNFWndIN202MDQ1TElsSnFMcGNYdUYwekQ4SzZCYy1CN2FrWERQTmdiSGJIXzNmSjNqXzhmc0Q4NkhMZGFySlh4NENzdUJIU21kNWlxazB6Y1ZaamlfeU1QVlVwU0hPU21lTXI2blZHN203czJBamZwRjQyTmpLT2FUdk5wZEZ5a2FTMmpMNk41SWQwTFRUVGJEZ1dYcmpNMk1NSUZlV4NHozZnBTQW1aem5hRDEydS1wX2NNZzRrX19DYlZQSHBhJTIyJTJDJTIyc2hvd19zdXRDEydS1wX2NNZzRrX19DYlZQSHBhJTIyJTJDJTIyc2hvd19zdXJ2ZXklMjIlM0F0cnVlJTdEJnBhdGg9JTJGbnQl8mZjaGVjUiLCJoIjJTJGODI4MjgxMDMwOTI3OTU2JTJGb3V0cm8mc3RhdGUiLCJoIjoiLyIsInMiOiJtIn0%3D;";
const c_user = cookie.replace(/^.*c_user=/, "").split(";")[0];
const i_user = cookie.replace(/^.*i_user=/, "").split(";")[0];
let default_body;
const id_Send = 100073280626414;

(async () => {
    await set_default_body();

    //let attachment = JSON.parse((await uploadAttachment(fs.createReadStream(pdf))).data.replace('for (;;);', '')).payload.metadata[0];
    send().then(({ data }) => { console.log(data) }).catch((e) =>
        console.log("done: " + e)
    );
})();

async function set_default_body() {
    let html = (
        await axios({
            url: "https://www.facebook.com",
            method: "GET",
            headers: {
                cookie,
            },
        })
    ).data;
    var reqCounter = 1;
    var fb_dtsg = html
        .replace(/^.*__eqmc/, "")
        .split("}")[0]
        .replace(/^.*"f":"/, "")
        .split('"')[0];
    var ttstamp = "2";
    for (var i = 0; i < fb_dtsg.length; i++) {
        ttstamp += fb_dtsg.charCodeAt(i);
    }
    var revision = getFrom(html, 'revision":', ",");
    default_body = () => ({
        __user: i_user,
        __req: (reqCounter++).toString(36),
        __rev: revision,
        __a: 1,
        fb_dtsg: fb_dtsg,
        jazoest: ttstamp,
    });
}

// ==== send message

function binaryToDecimal(data) {
    var ret = "";
    while (data !== "0") {
        var end = 0;
        var fullName = "";
        var i = 0;
        for (; i < data.length; i++) {
            end = 2 * end + parseInt(data[i], 10);
            if (end >= 10) {
                fullName += "1";
                end -= 10;
            } else {
                fullName += "0";
            }
        }
        ret = end.toString() + ret;
        data = fullName.slice(fullName.indexOf("1"));
    }
    return ret;
}

function generateOfflineThreadingID() {
    var ret = Date.now();
    var value = Math.floor(Math.random() * 4294967295);
    var str = ("0000000000000000000000" + value.toString(2)).slice(-22);
    var msgs = ret.toString(2) + str;
    return binaryToDecimal(msgs);
}

function getGUID() {
    var sectionLength = Date.now();
    var id = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
        /[xy]/g,
        function (c) {
            var r = Math.floor((sectionLength + Math.random() * 16) % 16);
            sectionLength = Math.floor(sectionLength / 16);
            var _guid = (c == "x" ? r : (r & 7) | 8).toString(16);
            return _guid;
        }
    );
    return id;
}

function padZeros(val, len) {
    val = String(val);
    len = len || 2;
    while (val.length < len) val = "0" + val;
    return val;
}

function getSignatureID() {
    return Math.floor(Math.random() * 2147483648).toString(16);
}

function getFrom(str, startToken, endToken) {
    var start = str.indexOf(startToken) + startToken.length;
    if (start < startToken.length) return "";

    var lastHalf = str.substring(start);
    var end = lastHalf.indexOf(endToken);
    if (end === -1) {
        throw Error(
            "Could not find endTime `" + endToken + "` in the given string."
        );
    }
    return lastHalf.substring(0, end);
}

async function send() {
    var variables = {
        "input": {
            "composer_entry_point": "inline_composer",
            "composer_source_surface": "timeline",
            "idempotence_token": (await getGUID()) + "FEED",
            "source": "WWW",
            "attachments": [],
            "audience": { "to_id": "100024792437434" },
            "message": { "ranges": [], "text": "ngủ thôi!" },
            "with_tags_ids": null,
            "inline_activities": [],
            "explicit_place_id": "0",
            "text_format_preset_id": "0",
            "logging": {
                "composer_session_id": (await getGUID())
            },
            "navigation_data": {
                "attribution_id_v2": "ProfileCometMentionsTabWithDeepDiveRoot.react,comet.profile.mentions,via_cold_start,1705598457639,253176,250100865708545,,"
            },
            "tracking": [null],
            "event_share_metadata": { "surface": "newsfeed" },
            "actor_id": i_user,
            "client_mutation_id": "1"
        },
        "displayCommentsFeedbackContext": null,
        "displayCommentsContextEnableComment": null,
        "displayCommentsContextIsAdPreview": null,
        "displayCommentsContextIsAggregatedShare": null,
        "displayCommentsContextIsStorySet": null,
        "feedLocation": "TIMELINE",
        "feedbackSource": 0,
        "focusCommentID": null,
        "gridMediaWidth": 230,
        "groupID": null,
        "scale": 1.5,
        "privacySelectorRenderLocation": "COMET_STREAM",
        "checkPhotosToReelsUpsellEligibility": true,
        "renderLocation": "timeline",
        "useDefaultActor": false,
        "inviteShortLinkKey": null,
        "isFeed": false,
        "isFundraiser": false,
        "isFunFactPost": false,
        "isGroup": false,
        "isEvent": false,
        "isTimeline": true,
        "isSocialLearning": false,
        "isPageNewsFeed": false,
        "isProfileReviews": false,
        "isWorkSharedDraft": false,
        "UFI2CommentsProvider_commentsKey": "ProfileCometMentionsTabRoute",
        "hashtag": null,
        "canUserManageOffers": false,
        "__relay_internal__pv__CometUFIIsRTAEnabledrelayprovider": false,
        "__relay_internal__pv__CometUFIReactionsEnableShortNamerelayprovider": false,
        "__relay_internal__pv__IsWorkUserrelayprovider": false,
        "__relay_internal__pv__IsMergQAPollsrelayprovider": false,
        "__relay_internal__pv__StoriesArmadilloReplyEnabledrelayprovider": false,
        "__relay_internal__pv__StoriesRingrelayprovider": false
    };

    let form = {
        fb_api_caller_class: "RelayModern",
        fb_api_req_friendly_name: "ComposerStoryCreateMutation",
        variables: JSON.stringify(variables),
        server_timestamps: "true",
        doc_id: "7020316421386088",
    };

    return axios({
        url: "https://web.facebook.com/api/graphql/",
        method: "POST",
        data: new URLSearchParams({
            ...default_body(),
            ...form
        }),
        headers: {
            cookie,
            "content-type": "application/x-www-form-urlencoded",
        },
    });
}
