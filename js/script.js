console.log("script.js loaded");

let endpoint = "https://api.giphy.com/v1/gifs/search?api_key=gsNL1fghdmaXLOJ2Ii4jAmHX923c62ep&q=smile&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips"

async function getGiphys() {
    const response = await fetch(endpoint);
    const data = await response.json();
    console.log(data);
    let images = [data];
    return images;
}

// getGiphys()

let giphyContainer = document.querySelector("#gif-container");

console.log(giphyContainer);

const button = document.querySelector("#fetch-gif-btn");
console.log(button);

// Attach a click event listener to the button. 
// If you use async/await, mark the listener's 
// function async.
let fake_images = {
    "data": [
        {
            "type": "gif",
            "id": "Fu3OjBQiCs3s0ZuLY3",
            "url": "https://giphy.com/gifs/moodman-reaction-Fu3OjBQiCs3s0ZuLY3",
            "slug": "moodman-reaction-Fu3OjBQiCs3s0ZuLY3",
            "bitly_gif_url": "https://gph.is/g/4Vn0op1",
            "bitly_url": "https://gph.is/g/4Vn0op1",
            "embed_url": "https://giphy.com/embed/Fu3OjBQiCs3s0ZuLY3",
            "username": "",
            "source": "",
            "title": "Dog Smile GIF by MOODMAN",
            "rating": "g",
            "content_url": "",
            "source_tld": "",
            "source_post_url": "",
            "is_sticker": 0,
            "import_datetime": "2020-10-02 02:36:06",
            "trending_datetime": "0000-00-00 00:00:00",
            "images": {
                "original": {
                    "height": "356",
                    "width": "200",
                    "size": "5681021",
                    "url": "https://media4.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/Fu3OjBQiCs3s0ZuLY3/giphy.gif",
                    "mp4_size": "2607163",
                    "mp4": "https://media4.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/Fu3OjBQiCs3s0ZuLY3/giphy.mp4",
                    "webp_size": "3393120",
                    "webp": "https://media4.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/Fu3OjBQiCs3s0ZuLY3/giphy.webp",
                    "frames": "225",
                    "hash": "56b3fbd18f7f0716067d37d9b5280f5d"
                },
                "fixed_height": {
                    "height": "200",
                    "width": "112",
                    "size": "2480063",
                    "url": "https://media4.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/Fu3OjBQiCs3s0ZuLY3/200.gif",
                    "mp4_size": "475848",
                    "mp4": "https://media4.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/Fu3OjBQiCs3s0ZuLY3/200.mp4",
                    "webp_size": "1007116",
                    "webp": "https://media4.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/Fu3OjBQiCs3s0ZuLY3/200.webp"
                },
                "fixed_height_downsampled": {
                    "height": "200",
                    "width": "112",
                    "size": "62217",
                    "url": "https://media4.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/Fu3OjBQiCs3s0ZuLY3/200_d.gif",
                    "webp_size": "37874",
                    "webp": "https://media4.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/Fu3OjBQiCs3s0ZuLY3/200_d.webp"
                },
                "fixed_height_small": {
                    "height": "100",
                    "width": "56",
                    "size": "759671",
                    "url": "https://media4.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/Fu3OjBQiCs3s0ZuLY3/100.gif",
                    "mp4_size": "145569",
                    "mp4": "https://media4.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/Fu3OjBQiCs3s0ZuLY3/100.mp4",
                    "webp_size": "347916",
                    "webp": "https://media4.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/Fu3OjBQiCs3s0ZuLY3/100.webp"
                },
                "fixed_width": {
                    "height": "356",
                    "width": "200",
                    "size": "5009975",
                    "url": "https://media4.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/Fu3OjBQiCs3s0ZuLY3/200w.gif",
                    "mp4_size": "2710218",
                    "mp4": "https://media4.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/Fu3OjBQiCs3s0ZuLY3/200w.mp4",
                    "webp_size": "2486838",
                    "webp": "https://media4.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/Fu3OjBQiCs3s0ZuLY3/200w.webp"
                },
                "fixed_width_downsampled": {
                    "height": "356",
                    "width": "200",
                    "size": "135302",
                    "url": "https://media4.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/Fu3OjBQiCs3s0ZuLY3/200w_d.gif",
                    "webp_size": "112154",
                    "webp": "https://media4.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/Fu3OjBQiCs3s0ZuLY3/200w_d.webp"
                },
                "fixed_width_small": {
                    "height": "178",
                    "width": "100",
                    "size": "2079255",
                    "url": "https://media4.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/Fu3OjBQiCs3s0ZuLY3/100w.gif",
                    "mp4_size": "403160",
                    "mp4": "https://media4.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/Fu3OjBQiCs3s0ZuLY3/100w.mp4",
                    "webp_size": "697382",
                    "webp": "https://media4.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/Fu3OjBQiCs3s0ZuLY3/100w.webp"
                }
            },
            "analytics_response_payload": "e=ZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD01ZWRhNWI1YjQweXJ4ODRheWI0M3NoM25wbzVxdTgxcHJxM3Zic2hkaXM0ejloeHMmZ2lmX2lkPUZ1M09qQlFpQ3MzczBadUxZMyZjdD1n",
            "analytics": {
                "onload": {
                    "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD01ZWRhNWI1YjQweXJ4ODRheWI0M3NoM25wbzVxdTgxcHJxM3Zic2hkaXM0ejloeHMmZ2lmX2lkPUZ1M09qQlFpQ3MzczBadUxZMyZjdD1n&action_type=SEEN"
                },
                "onclick": {
                    "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD01ZWRhNWI1YjQweXJ4ODRheWI0M3NoM25wbzVxdTgxcHJxM3Zic2hkaXM0ejloeHMmZ2lmX2lkPUZ1M09qQlFpQ3MzczBadUxZMyZjdD1n&action_type=CLICK"
                },
                "onsent": {
                    "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD01ZWRhNWI1YjQweXJ4ODRheWI0M3NoM25wbzVxdTgxcHJxM3Zic2hkaXM0ejloeHMmZ2lmX2lkPUZ1M09qQlFpQ3MzczBadUxZMyZjdD1n&action_type=SENT"
                }
            },
            "alt_text": "Video gif. A close-up of a white dog with sprigs of tiny flowers on its head as it appears to smile with squinty eyes and teeth bared. ",
            "is_low_contrast": false
        },
        {
            "type": "gif",
            "id": "B0vFTrb0ZGDf2",
            "url": "https://giphy.com/gifs/city-bus-doll-B0vFTrb0ZGDf2",
            "slug": "city-bus-doll-B0vFTrb0ZGDf2",
            "bitly_gif_url": "http://gph.is/1kURzBM",
            "bitly_url": "http://gph.is/1kURzBM",
            "embed_url": "https://giphy.com/embed/B0vFTrb0ZGDf2",
            "username": "",
            "source": "",
            "title": "Happy Toddlers And Tiaras GIF",
            "rating": "g",
            "content_url": "",
            "source_tld": "",
            "source_post_url": "",
            "is_sticker": 0,
            "import_datetime": "2014-06-14 18:48:05",
            "trending_datetime": "2022-05-03 17:43:23",
            "images": {
                "original": {
                    "height": "242",
                    "width": "460",
                    "size": "503393",
                    "url": "https://media2.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/B0vFTrb0ZGDf2/giphy.gif",
                    "mp4_size": "268410",
                    "mp4": "https://media2.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/B0vFTrb0ZGDf2/giphy.mp4",
                    "webp_size": "307834",
                    "webp": "https://media2.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/B0vFTrb0ZGDf2/giphy.webp",
                    "frames": "18",
                    "hash": "177e7b752c4e4e6a8b40a43cec7eac74"
                },
                "fixed_height": {
                    "height": "200",
                    "width": "380",
                    "size": "363835",
                    "url": "https://media2.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/B0vFTrb0ZGDf2/200.gif",
                    "mp4_size": "177788",
                    "mp4": "https://media2.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/B0vFTrb0ZGDf2/200.mp4",
                    "webp_size": "225352",
                    "webp": "https://media2.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/B0vFTrb0ZGDf2/200.webp"
                },
                "fixed_height_downsampled": {
                    "height": "200",
                    "width": "380",
                    "size": "127468",
                    "url": "https://media2.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/B0vFTrb0ZGDf2/200_d.gif",
                    "webp_size": "92388",
                    "webp": "https://media2.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/B0vFTrb0ZGDf2/200_d.webp"
                },
                "fixed_height_small": {
                    "height": "100",
                    "width": "190",
                    "size": "109963",
                    "url": "https://media2.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/B0vFTrb0ZGDf2/100.gif",
                    "mp4_size": "45147",
                    "mp4": "https://media2.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/B0vFTrb0ZGDf2/100.mp4",
                    "webp_size": "67274",
                    "webp": "https://media2.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/B0vFTrb0ZGDf2/100.webp"
                },
                "fixed_width": {
                    "height": "106",
                    "width": "200",
                    "size": "115869",
                    "url": "https://media2.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/B0vFTrb0ZGDf2/200w.gif",
                    "mp4_size": "49478",
                    "mp4": "https://media2.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/B0vFTrb0ZGDf2/200w.mp4",
                    "webp_size": "74688",
                    "webp": "https://media2.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/B0vFTrb0ZGDf2/200w.webp"
                },
                "fixed_width_downsampled": {
                    "height": "106",
                    "width": "200",
                    "size": "41349",
                    "url": "https://media2.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/B0vFTrb0ZGDf2/200w_d.gif",
                    "webp_size": "34390",
                    "webp": "https://media2.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/B0vFTrb0ZGDf2/200w_d.webp"
                },
                "fixed_width_small": {
                    "height": "54",
                    "width": "100",
                    "size": "38365",
                    "url": "https://media2.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/B0vFTrb0ZGDf2/100w.gif",
                    "mp4_size": "16031",
                    "mp4": "https://media2.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/B0vFTrb0ZGDf2/100w.mp4",
                    "webp_size": "29086",
                    "webp": "https://media2.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/B0vFTrb0ZGDf2/100w.webp"
                }
            },
            "analytics_response_payload": "e=ZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD01ZWRhNWI1YjQweXJ4ODRheWI0M3NoM25wbzVxdTgxcHJxM3Zic2hkaXM0ejloeHMmZ2lmX2lkPUIwdkZUcmIwWkdEZjImY3Q9Zw",
            "analytics": {
                "onload": {
                    "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD01ZWRhNWI1YjQweXJ4ODRheWI0M3NoM25wbzVxdTgxcHJxM3Zic2hkaXM0ejloeHMmZ2lmX2lkPUIwdkZUcmIwWkdEZjImY3Q9Zw&action_type=SEEN"
                },
                "onclick": {
                    "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD01ZWRhNWI1YjQweXJ4ODRheWI0M3NoM25wbzVxdTgxcHJxM3Zic2hkaXM0ejloeHMmZ2lmX2lkPUIwdkZUcmIwWkdEZjImY3Q9Zw&action_type=CLICK"
                },
                "onsent": {
                    "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD01ZWRhNWI1YjQweXJ4ODRheWI0M3NoM25wbzVxdTgxcHJxM3Zic2hkaXM0ejloeHMmZ2lmX2lkPUIwdkZUcmIwWkdEZjImY3Q9Zw&action_type=SENT"
                }
            },
            "alt_text": "Reality TV gif. Kailia Posey on Toddlers and Tiaras sits in a room full of sparkly, extravagant tiaras. She looks away from us with big eyes and a cheeky smile.",
            "is_low_contrast": false
        },
        {
            "type": "gif",
            "id": "Dy6KtvPNfNVAIEx7O6",
            "url": "https://giphy.com/gifs/tophermcgee3-Dy6KtvPNfNVAIEx7O6",
            "slug": "tophermcgee3-Dy6KtvPNfNVAIEx7O6",
            "bitly_gif_url": "https://gph.is/g/EGkoOLM",
            "bitly_url": "https://gph.is/g/EGkoOLM",
            "embed_url": "https://giphy.com/embed/Dy6KtvPNfNVAIEx7O6",
            "username": "tophermcgee3",
            "source": "",
            "title": "Happy In Love GIF by slicedbread",
            "rating": "g",
            "content_url": "",
            "source_tld": "",
            "source_post_url": "",
            "is_sticker": 0,
            "import_datetime": "2026-02-24 20:00:43",
            "trending_datetime": "0000-00-00 00:00:00",
            "images": {
                "original": {
                    "height": "320",
                    "width": "320",
                    "size": "740051",
                    "url": "https://media3.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/Dy6KtvPNfNVAIEx7O6/giphy.gif",
                    "mp4_size": "191282",
                    "mp4": "https://media3.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/Dy6KtvPNfNVAIEx7O6/giphy.mp4",
                    "webp_size": "212460",
                    "webp": "https://media3.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/Dy6KtvPNfNVAIEx7O6/giphy.webp",
                    "frames": "20",
                    "hash": "e8a882e1b72a0389362cf5a95e061630"
                },
                "fixed_height": {
                    "height": "200",
                    "width": "200",
                    "size": "337187",
                    "url": "https://media3.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/Dy6KtvPNfNVAIEx7O6/200.gif",
                    "mp4_size": "83250",
                    "mp4": "https://media3.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/Dy6KtvPNfNVAIEx7O6/200.mp4",
                    "webp_size": "114770",
                    "webp": "https://media3.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/Dy6KtvPNfNVAIEx7O6/200.webp"
                },
                "fixed_height_downsampled": {
                    "height": "200",
                    "width": "200",
                    "size": "89482",
                    "url": "https://media3.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/Dy6KtvPNfNVAIEx7O6/200_d.gif",
                    "webp_size": "52794",
                    "webp": "https://media3.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/Dy6KtvPNfNVAIEx7O6/200_d.webp"
                },
                "fixed_height_small": {
                    "height": "100",
                    "width": "100",
                    "size": "101421",
                    "url": "https://media3.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/Dy6KtvPNfNVAIEx7O6/100.gif",
                    "mp4_size": "26102",
                    "mp4": "https://media3.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/Dy6KtvPNfNVAIEx7O6/100.mp4",
                    "webp_size": "35432",
                    "webp": "https://media3.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/Dy6KtvPNfNVAIEx7O6/100.webp"
                },
                "fixed_width": {
                    "height": "200",
                    "width": "200",
                    "size": "337187",
                    "url": "https://media3.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/Dy6KtvPNfNVAIEx7O6/200w.gif",
                    "mp4_size": "83250",
                    "mp4": "https://media3.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/Dy6KtvPNfNVAIEx7O6/200w.mp4",
                    "webp_size": "90500",
                    "webp": "https://media3.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/Dy6KtvPNfNVAIEx7O6/200w.webp"
                },
                "fixed_width_downsampled": {
                    "height": "200",
                    "width": "200",
                    "size": "89482",
                    "url": "https://media3.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/Dy6KtvPNfNVAIEx7O6/200w_d.gif",
                    "webp_size": "52794",
                    "webp": "https://media3.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/Dy6KtvPNfNVAIEx7O6/200w_d.webp"
                },
                "fixed_width_small": {
                    "height": "100",
                    "width": "100",
                    "size": "101421",
                    "url": "https://media3.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/Dy6KtvPNfNVAIEx7O6/100w.gif",
                    "mp4_size": "26102",
                    "mp4": "https://media3.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/Dy6KtvPNfNVAIEx7O6/100w.mp4",
                    "webp_size": "35432",
                    "webp": "https://media3.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/Dy6KtvPNfNVAIEx7O6/100w.webp"
                }
            },
            "user": {
                "avatar_url": "https://media4.giphy.com/avatars/tophermcgee3/aWVoQXzL2e41.gif",
                "banner_image": "https://media4.giphy.com/channel_assets/tophermcgee3/tG9B9sSQeXh9.png",
                "banner_url": "https://media4.giphy.com/channel_assets/tophermcgee3/tG9B9sSQeXh9.png",
                "profile_url": "https://giphy.com/tophermcgee3/",
                "username": "tophermcgee3",
                "display_name": "slicedbread",
                "description": "",
                "instagram_url": "",
                "website_url": "",
                "is_verified": false
            },
            "analytics_response_payload": "e=ZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD01ZWRhNWI1YjQweXJ4ODRheWI0M3NoM25wbzVxdTgxcHJxM3Zic2hkaXM0ejloeHMmZ2lmX2lkPUR5Nkt0dlBOZk5WQUlFeDdPNiZjdD1n",
            "analytics": {
                "onload": {
                    "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD01ZWRhNWI1YjQweXJ4ODRheWI0M3NoM25wbzVxdTgxcHJxM3Zic2hkaXM0ejloeHMmZ2lmX2lkPUR5Nkt0dlBOZk5WQUlFeDdPNiZjdD1n&action_type=SEEN"
                },
                "onclick": {
                    "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD01ZWRhNWI1YjQweXJ4ODRheWI0M3NoM25wbzVxdTgxcHJxM3Zic2hkaXM0ejloeHMmZ2lmX2lkPUR5Nkt0dlBOZk5WQUlFeDdPNiZjdD1n&action_type=CLICK"
                },
                "onsent": {
                    "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD01ZWRhNWI1YjQweXJ4ODRheWI0M3NoM25wbzVxdTgxcHJxM3Zic2hkaXM0ejloeHMmZ2lmX2lkPUR5Nkt0dlBOZk5WQUlFeDdPNiZjdD1n&action_type=SENT"
                }
            },
            "alt_text": "",
            "is_low_contrast": false
        },
        {
            "type": "gif",
            "id": "sWBzg2D15WwQjHcxbt",
            "url": "https://giphy.com/gifs/smirk-corgi-mimibarbar-sWBzg2D15WwQjHcxbt",
            "slug": "smirk-corgi-mimibarbar-sWBzg2D15WwQjHcxbt",
            "bitly_gif_url": "https://gph.is/g/4bgvYX3",
            "bitly_url": "https://gph.is/g/4bgvYX3",
            "embed_url": "https://giphy.com/embed/sWBzg2D15WwQjHcxbt",
            "username": "mimi_barbar",
            "source": "",
            "title": "Dog Smile GIF",
            "rating": "g",
            "content_url": "",
            "source_tld": "",
            "source_post_url": "",
            "is_sticker": 0,
            "import_datetime": "2025-12-03 16:59:56",
            "trending_datetime": "2026-01-14 17:00:03",
            "images": {
                "original": {
                    "height": "450",
                    "width": "450",
                    "size": "5921459",
                    "url": "https://media1.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/sWBzg2D15WwQjHcxbt/giphy.gif",
                    "mp4_size": "1012647",
                    "mp4": "https://media1.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/sWBzg2D15WwQjHcxbt/giphy.mp4",
                    "webp_size": "1997642",
                    "webp": "https://media1.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/sWBzg2D15WwQjHcxbt/giphy.webp",
                    "frames": "123",
                    "hash": "0d716c17e00ccca88e31e027a0504425"
                },
                "fixed_height": {
                    "height": "200",
                    "width": "200",
                    "size": "1356219",
                    "url": "https://media1.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/sWBzg2D15WwQjHcxbt/200.gif",
                    "mp4_size": "188173",
                    "mp4": "https://media1.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/sWBzg2D15WwQjHcxbt/200.mp4",
                    "webp_size": "541232",
                    "webp": "https://media1.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/sWBzg2D15WwQjHcxbt/200.webp"
                },
                "fixed_height_downsampled": {
                    "height": "200",
                    "width": "200",
                    "size": "63842",
                    "url": "https://media1.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/sWBzg2D15WwQjHcxbt/200_d.gif",
                    "webp_size": "41356",
                    "webp": "https://media1.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/sWBzg2D15WwQjHcxbt/200_d.webp"
                },
                "fixed_height_small": {
                    "height": "100",
                    "width": "100",
                    "size": "510730",
                    "url": "https://media1.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/sWBzg2D15WwQjHcxbt/100.gif",
                    "mp4_size": "52290",
                    "mp4": "https://media1.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/sWBzg2D15WwQjHcxbt/100.mp4",
                    "webp_size": "167210",
                    "webp": "https://media1.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/sWBzg2D15WwQjHcxbt/100.webp"
                },
                "fixed_width": {
                    "height": "200",
                    "width": "200",
                    "size": "1356219",
                    "url": "https://media1.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/sWBzg2D15WwQjHcxbt/200w.gif",
                    "mp4_size": "188173",
                    "mp4": "https://media1.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/sWBzg2D15WwQjHcxbt/200w.mp4",
                    "webp_size": "415602",
                    "webp": "https://media1.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/sWBzg2D15WwQjHcxbt/200w.webp"
                },
                "fixed_width_downsampled": {
                    "height": "200",
                    "width": "200",
                    "size": "63842",
                    "url": "https://media1.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/sWBzg2D15WwQjHcxbt/200w_d.gif",
                    "webp_size": "41356",
                    "webp": "https://media1.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/sWBzg2D15WwQjHcxbt/200w_d.webp"
                },
                "fixed_width_small": {
                    "height": "100",
                    "width": "100",
                    "size": "510730",
                    "url": "https://media1.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/sWBzg2D15WwQjHcxbt/100w.gif",
                    "mp4_size": "52290",
                    "mp4": "https://media1.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/sWBzg2D15WwQjHcxbt/100w.mp4",
                    "webp_size": "167210",
                    "webp": "https://media1.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/sWBzg2D15WwQjHcxbt/100w.webp"
                }
            },
            "user": {
                "avatar_url": "https://media4.giphy.com/avatars/mimi_barbar/126OfHROczad.jpg",
                "banner_image": "",
                "banner_url": "",
                "profile_url": "https://giphy.com/channel/mimi_barbar/",
                "username": "mimi_barbar",
                "display_name": "MimiBarbar",
                "description": "Posting random stuff!",
                "instagram_url": "https://instagram.com/mimi.barbar",
                "website_url": "http://www.instagram.com/mimi.barbar",
                "is_verified": false
            },
            "analytics_response_payload": "e=ZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD01ZWRhNWI1YjQweXJ4ODRheWI0M3NoM25wbzVxdTgxcHJxM3Zic2hkaXM0ejloeHMmZ2lmX2lkPXNXQnpnMkQxNVd3UWpIY3hidCZjdD1n",
            "analytics": {
                "onload": {
                    "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD01ZWRhNWI1YjQweXJ4ODRheWI0M3NoM25wbzVxdTgxcHJxM3Zic2hkaXM0ejloeHMmZ2lmX2lkPXNXQnpnMkQxNVd3UWpIY3hidCZjdD1n&action_type=SEEN"
                },
                "onclick": {
                    "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD01ZWRhNWI1YjQweXJ4ODRheWI0M3NoM25wbzVxdTgxcHJxM3Zic2hkaXM0ejloeHMmZ2lmX2lkPXNXQnpnMkQxNVd3UWpIY3hidCZjdD1n&action_type=CLICK"
                },
                "onsent": {
                    "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD01ZWRhNWI1YjQweXJ4ODRheWI0M3NoM25wbzVxdTgxcHJxM3Zic2hkaXM0ejloeHMmZ2lmX2lkPXNXQnpnMkQxNVd3UWpIY3hidCZjdD1n&action_type=SENT"
                }
            },
            "alt_text": "",
            "is_low_contrast": false
        },
        {
            "type": "gif",
            "id": "13aSSyJaI5NkTm",
            "url": "https://giphy.com/gifs/smile-awkward-13aSSyJaI5NkTm",
            "slug": "smile-awkward-13aSSyJaI5NkTm",
            "bitly_gif_url": "http://gph.is/1cgk5qT",
            "bitly_url": "http://gph.is/1cgk5qT",
            "embed_url": "https://giphy.com/embed/13aSSyJaI5NkTm",
            "username": "",
            "source": "",
            "title": "Jack Black Smile GIF",
            "rating": "g",
            "content_url": "",
            "source_tld": "",
            "source_post_url": "",
            "is_sticker": 0,
            "import_datetime": "2013-08-28 08:12:39",
            "trending_datetime": "2017-08-28 17:23:23",
            "images": {
                "original": {
                    "height": "229",
                    "width": "260",
                    "size": "1827905",
                    "url": "https://media0.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/13aSSyJaI5NkTm/giphy.gif",
                    "mp4_size": "723342",
                    "mp4": "https://media0.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/13aSSyJaI5NkTm/giphy.mp4",
                    "webp_size": "903586",
                    "webp": "https://media0.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/13aSSyJaI5NkTm/giphy.webp",
                    "frames": "80",
                    "hash": "099784db4fef590cfb835fbb3a53f25a"
                },
                "fixed_height": {
                    "height": "200",
                    "width": "228",
                    "size": "1384293",
                    "url": "https://media0.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/13aSSyJaI5NkTm/200.gif",
                    "mp4_size": "536674",
                    "mp4": "https://media0.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/13aSSyJaI5NkTm/200.mp4",
                    "webp_size": "683796",
                    "webp": "https://media0.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/13aSSyJaI5NkTm/200.webp"
                },
                "fixed_height_downsampled": {
                    "height": "200",
                    "width": "228",
                    "size": "99204",
                    "url": "https://media0.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/13aSSyJaI5NkTm/200_d.gif",
                    "webp_size": "70362",
                    "webp": "https://media0.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/13aSSyJaI5NkTm/200_d.webp"
                },
                "fixed_height_small": {
                    "height": "100",
                    "width": "114",
                    "size": "442628",
                    "url": "https://media0.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/13aSSyJaI5NkTm/100.gif",
                    "mp4_size": "132732",
                    "mp4": "https://media0.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/13aSSyJaI5NkTm/100.mp4",
                    "webp_size": "205710",
                    "webp": "https://media0.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/13aSSyJaI5NkTm/100.webp"
                },
                "fixed_width": {
                    "height": "176",
                    "width": "200",
                    "size": "1106994",
                    "url": "https://media0.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/13aSSyJaI5NkTm/200w.gif",
                    "mp4_size": "383448",
                    "mp4": "https://media0.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/13aSSyJaI5NkTm/200w.mp4",
                    "webp_size": "439788",
                    "webp": "https://media0.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/13aSSyJaI5NkTm/200w.webp"
                },
                "fixed_width_downsampled": {
                    "height": "176",
                    "width": "200",
                    "size": "79587",
                    "url": "https://media0.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/13aSSyJaI5NkTm/200w_d.gif",
                    "webp_size": "56640",
                    "webp": "https://media0.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/13aSSyJaI5NkTm/200w_d.webp"
                },
                "fixed_width_small": {
                    "height": "88",
                    "width": "100",
                    "size": "355720",
                    "url": "https://media0.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/13aSSyJaI5NkTm/100w.gif",
                    "mp4_size": "106493",
                    "mp4": "https://media0.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/13aSSyJaI5NkTm/100w.mp4",
                    "webp_size": "173120",
                    "webp": "https://media0.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/13aSSyJaI5NkTm/100w.webp"
                }
            },
            "analytics_response_payload": "e=ZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD01ZWRhNWI1YjQweXJ4ODRheWI0M3NoM25wbzVxdTgxcHJxM3Zic2hkaXM0ejloeHMmZ2lmX2lkPTEzYVNTeUphSTVOa1RtJmN0PWc",
            "analytics": {
                "onload": {
                    "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD01ZWRhNWI1YjQweXJ4ODRheWI0M3NoM25wbzVxdTgxcHJxM3Zic2hkaXM0ejloeHMmZ2lmX2lkPTEzYVNTeUphSTVOa1RtJmN0PWc&action_type=SEEN"
                },
                "onclick": {
                    "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD01ZWRhNWI1YjQweXJ4ODRheWI0M3NoM25wbzVxdTgxcHJxM3Zic2hkaXM0ejloeHMmZ2lmX2lkPTEzYVNTeUphSTVOa1RtJmN0PWc&action_type=CLICK"
                },
                "onsent": {
                    "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD01ZWRhNWI1YjQweXJ4ODRheWI0M3NoM25wbzVxdTgxcHJxM3Zic2hkaXM0ejloeHMmZ2lmX2lkPTEzYVNTeUphSTVOa1RtJmN0PWc&action_type=SENT"
                }
            },
            "alt_text": "Movie gif. Jack Black as Ignacio in Nacho Libre looks towards the camera with a small, tight grin, and then looks away awkwardly, pressing his lips against his teeth. ",
            "is_low_contrast": false
        },
        {
            "type": "gif",
            "id": "KEf7gXqvQ8B3SWnUid",
            "url": "https://giphy.com/gifs/dreamworks-cute-mood-please-KEf7gXqvQ8B3SWnUid",
            "slug": "dreamworks-cute-mood-please-KEf7gXqvQ8B3SWnUid",
            "bitly_gif_url": "https://gph.is/g/4wg6God",
            "bitly_url": "https://gph.is/g/4wg6God",
            "embed_url": "https://giphy.com/embed/KEf7gXqvQ8B3SWnUid",
            "username": "dreamworks",
            "source": "",
            "title": "Good Morning Smile GIF by DreamWorks Animation",
            "rating": "g",
            "content_url": "",
            "source_tld": "",
            "source_post_url": "",
            "is_sticker": 0,
            "import_datetime": "2019-06-25 17:34:38",
            "trending_datetime": "2020-12-26 16:30:08",
            "images": {
                "original": {
                    "height": "480",
                    "width": "480",
                    "size": "1871627",
                    "url": "https://media2.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/KEf7gXqvQ8B3SWnUid/giphy.gif",
                    "mp4_size": "299277",
                    "mp4": "https://media2.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/KEf7gXqvQ8B3SWnUid/giphy.mp4",
                    "webp_size": "1021244",
                    "webp": "https://media2.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/KEf7gXqvQ8B3SWnUid/giphy.webp",
                    "frames": "30",
                    "hash": "9eb1cde0281744a4bd9424058c7c73b1"
                },
                "fixed_height": {
                    "height": "200",
                    "width": "200",
                    "size": "352172",
                    "url": "https://media2.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/KEf7gXqvQ8B3SWnUid/200.gif",
                    "mp4_size": "47005",
                    "mp4": "https://media2.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/KEf7gXqvQ8B3SWnUid/200.mp4",
                    "webp_size": "226356",
                    "webp": "https://media2.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/KEf7gXqvQ8B3SWnUid/200.webp"
                },
                "fixed_height_downsampled": {
                    "height": "200",
                    "width": "200",
                    "size": "70944",
                    "url": "https://media2.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/KEf7gXqvQ8B3SWnUid/200_d.gif",
                    "webp_size": "57282",
                    "webp": "https://media2.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/KEf7gXqvQ8B3SWnUid/200_d.webp"
                },
                "fixed_height_small": {
                    "height": "100",
                    "width": "100",
                    "size": "104661",
                    "url": "https://media2.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/KEf7gXqvQ8B3SWnUid/100.gif",
                    "mp4_size": "15893",
                    "mp4": "https://media2.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/KEf7gXqvQ8B3SWnUid/100.mp4",
                    "webp_size": "48914",
                    "webp": "https://media2.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/KEf7gXqvQ8B3SWnUid/100.webp"
                },
                "fixed_width": {
                    "height": "200",
                    "width": "200",
                    "size": "352172",
                    "url": "https://media2.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/KEf7gXqvQ8B3SWnUid/200w.gif",
                    "mp4_size": "47005",
                    "mp4": "https://media2.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/KEf7gXqvQ8B3SWnUid/200w.mp4",
                    "webp_size": "155122",
                    "webp": "https://media2.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/KEf7gXqvQ8B3SWnUid/200w.webp"
                },
                "fixed_width_downsampled": {
                    "height": "200",
                    "width": "200",
                    "size": "70944",
                    "url": "https://media2.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/KEf7gXqvQ8B3SWnUid/200w_d.gif",
                    "webp_size": "57282",
                    "webp": "https://media2.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/KEf7gXqvQ8B3SWnUid/200w_d.webp"
                },
                "fixed_width_small": {
                    "height": "100",
                    "width": "100",
                    "size": "104661",
                    "url": "https://media2.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/KEf7gXqvQ8B3SWnUid/100w.gif",
                    "mp4_size": "15893",
                    "mp4": "https://media2.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/KEf7gXqvQ8B3SWnUid/100w.mp4",
                    "webp_size": "48914",
                    "webp": "https://media2.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/KEf7gXqvQ8B3SWnUid/100w.webp"
                }
            },
            "user": {
                "avatar_url": "https://media4.giphy.com/avatars/dreamworks/WBJVSwO8sHWs.png",
                "banner_image": "",
                "banner_url": "",
                "profile_url": "https://giphy.com/dreamworks/",
                "username": "dreamworks",
                "display_name": "DreamWorks Animation",
                "description": "",
                "instagram_url": "https://instagram.com/dreamworks",
                "website_url": "http://www.dreamworks.com/",
                "is_verified": true
            },
            "analytics_response_payload": "e=ZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD01ZWRhNWI1YjQweXJ4ODRheWI0M3NoM25wbzVxdTgxcHJxM3Zic2hkaXM0ejloeHMmZ2lmX2lkPUtFZjdnWHF2UThCM1NXblVpZCZjdD1n",
            "analytics": {
                "onload": {
                    "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD01ZWRhNWI1YjQweXJ4ODRheWI0M3NoM25wbzVxdTgxcHJxM3Zic2hkaXM0ejloeHMmZ2lmX2lkPUtFZjdnWHF2UThCM1NXblVpZCZjdD1n&action_type=SEEN"
                },
                "onclick": {
                    "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD01ZWRhNWI1YjQweXJ4ODRheWI0M3NoM25wbzVxdTgxcHJxM3Zic2hkaXM0ejloeHMmZ2lmX2lkPUtFZjdnWHF2UThCM1NXblVpZCZjdD1n&action_type=CLICK"
                },
                "onsent": {
                    "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD01ZWRhNWI1YjQweXJ4ODRheWI0M3NoM25wbzVxdTgxcHJxM3Zic2hkaXM0ejloeHMmZ2lmX2lkPUtFZjdnWHF2UThCM1NXblVpZCZjdD1n&action_type=SENT"
                }
            },
            "alt_text": "Movie gif. Donkey from the movie, \"Shrek\" stands in a dirt field and looks at us, batting his eyelashes and cocking his head to one side, giving us a sweet toothy smile. ",
            "is_low_contrast": false
        },
        {
            "type": "gif",
            "id": "1qenYHgA3O4D1avD0n",
            "url": "https://giphy.com/gifs/FanDuel-kay-adams-up-and-show-1qenYHgA3O4D1avD0n",
            "slug": "FanDuel-kay-adams-up-and-show-1qenYHgA3O4D1avD0n",
            "bitly_gif_url": "https://gph.is/g/4wOVkrd",
            "bitly_url": "https://gph.is/g/4wOVkrd",
            "embed_url": "https://giphy.com/embed/1qenYHgA3O4D1avD0n",
            "username": "FanDuel",
            "source": "",
            "title": "Look At Me Smile GIF by FanDuel",
            "rating": "g",
            "content_url": "",
            "source_tld": "",
            "source_post_url": "",
            "is_sticker": 0,
            "import_datetime": "2023-02-02 22:07:04",
            "trending_datetime": "0000-00-00 00:00:00",
            "images": {
                "original": {
                    "height": "480",
                    "width": "480",
                    "size": "716448",
                    "url": "https://media1.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/1qenYHgA3O4D1avD0n/giphy.gif",
                    "mp4_size": "143008",
                    "mp4": "https://media1.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/1qenYHgA3O4D1avD0n/giphy.mp4",
                    "webp_size": "212026",
                    "webp": "https://media1.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/1qenYHgA3O4D1avD0n/giphy.webp",
                    "frames": "9",
                    "hash": "79e70b413bd049b740c27a5540262ab6"
                },
                "fixed_height": {
                    "height": "200",
                    "width": "200",
                    "size": "131345",
                    "url": "https://media1.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/1qenYHgA3O4D1avD0n/200.gif",
                    "mp4_size": "37319",
                    "mp4": "https://media1.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/1qenYHgA3O4D1avD0n/200.mp4",
                    "webp_size": "58858",
                    "webp": "https://media1.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/1qenYHgA3O4D1avD0n/200.webp"
                },
                "fixed_height_downsampled": {
                    "height": "200",
                    "width": "200",
                    "size": "84391",
                    "url": "https://media1.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/1qenYHgA3O4D1avD0n/200_d.gif",
                    "webp_size": "58450",
                    "webp": "https://media1.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/1qenYHgA3O4D1avD0n/200_d.webp"
                },
                "fixed_height_small": {
                    "height": "100",
                    "width": "100",
                    "size": "41913",
                    "url": "https://media1.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/1qenYHgA3O4D1avD0n/100.gif",
                    "mp4_size": "13701",
                    "mp4": "https://media1.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/1qenYHgA3O4D1avD0n/100.mp4",
                    "webp_size": "19910",
                    "webp": "https://media1.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/1qenYHgA3O4D1avD0n/100.webp"
                },
                "fixed_width": {
                    "height": "200",
                    "width": "200",
                    "size": "131345",
                    "url": "https://media1.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/1qenYHgA3O4D1avD0n/200w.gif",
                    "mp4_size": "37319",
                    "mp4": "https://media1.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/1qenYHgA3O4D1avD0n/200w.mp4",
                    "webp_size": "47734",
                    "webp": "https://media1.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/1qenYHgA3O4D1avD0n/200w.webp"
                },
                "fixed_width_downsampled": {
                    "height": "200",
                    "width": "200",
                    "size": "84391",
                    "url": "https://media1.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/1qenYHgA3O4D1avD0n/200w_d.gif",
                    "webp_size": "58450",
                    "webp": "https://media1.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/1qenYHgA3O4D1avD0n/200w_d.webp"
                },
                "fixed_width_small": {
                    "height": "100",
                    "width": "100",
                    "size": "41913",
                    "url": "https://media1.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/1qenYHgA3O4D1avD0n/100w.gif",
                    "mp4_size": "13701",
                    "mp4": "https://media1.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/1qenYHgA3O4D1avD0n/100w.mp4",
                    "webp_size": "19910",
                    "webp": "https://media1.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/1qenYHgA3O4D1avD0n/100w.webp"
                }
            },
            "user": {
                "avatar_url": "https://media4.giphy.com/avatars/FanDuel/P7RmyCA2W5Eb.png",
                "banner_image": "",
                "banner_url": "",
                "profile_url": "https://giphy.com/FanDuel/",
                "username": "FanDuel",
                "display_name": "FanDuel",
                "description": "Make Every Moment More",
                "instagram_url": "https://instagram.com/FanDuel ",
                "website_url": "http://www.fanduel.com",
                "is_verified": false
            },
            "analytics_response_payload": "e=ZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD01ZWRhNWI1YjQweXJ4ODRheWI0M3NoM25wbzVxdTgxcHJxM3Zic2hkaXM0ejloeHMmZ2lmX2lkPTFxZW5ZSGdBM080RDFhdkQwbiZjdD1n",
            "analytics": {
                "onload": {
                    "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD01ZWRhNWI1YjQweXJ4ODRheWI0M3NoM25wbzVxdTgxcHJxM3Zic2hkaXM0ejloeHMmZ2lmX2lkPTFxZW5ZSGdBM080RDFhdkQwbiZjdD1n&action_type=SEEN"
                },
                "onclick": {
                    "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD01ZWRhNWI1YjQweXJ4ODRheWI0M3NoM25wbzVxdTgxcHJxM3Zic2hkaXM0ejloeHMmZ2lmX2lkPTFxZW5ZSGdBM080RDFhdkQwbiZjdD1n&action_type=CLICK"
                },
                "onsent": {
                    "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD01ZWRhNWI1YjQweXJ4ODRheWI0M3NoM25wbzVxdTgxcHJxM3Zic2hkaXM0ejloeHMmZ2lmX2lkPTFxZW5ZSGdBM080RDFhdkQwbiZjdD1n&action_type=SENT"
                }
            },
            "alt_text": "",
            "is_low_contrast": false
        },
        {
            "type": "gif",
            "id": "olgeswTlVqYJiYzYEF",
            "url": "https://giphy.com/gifs/smile-smiling-smirking-olgeswTlVqYJiYzYEF",
            "slug": "smile-smiling-smirking-olgeswTlVqYJiYzYEF",
            "bitly_gif_url": "https://gph.is/g/aKX3lkY",
            "bitly_url": "https://gph.is/g/aKX3lkY",
            "embed_url": "https://giphy.com/embed/olgeswTlVqYJiYzYEF",
            "username": "noxarilty",
            "source": "",
            "title": "Pig Smile GIF",
            "rating": "g",
            "content_url": "",
            "source_tld": "",
            "source_post_url": "",
            "is_sticker": 0,
            "import_datetime": "2026-01-29 17:24:48",
            "trending_datetime": "0000-00-00 00:00:00",
            "images": {
                "original": {
                    "height": "480",
                    "width": "368",
                    "size": "1451530",
                    "url": "https://media3.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/olgeswTlVqYJiYzYEF/giphy.gif",
                    "mp4_size": "82286",
                    "mp4": "https://media3.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/olgeswTlVqYJiYzYEF/giphy.mp4",
                    "webp_size": "53286",
                    "webp": "https://media3.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/olgeswTlVqYJiYzYEF/giphy.webp",
                    "frames": "27",
                    "hash": "b28855949bf703d6fdc6386df11ca25d"
                },
                "fixed_height": {
                    "height": "200",
                    "width": "154",
                    "size": "255459",
                    "url": "https://media3.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/olgeswTlVqYJiYzYEF/200.gif",
                    "mp4_size": "16574",
                    "mp4": "https://media3.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/olgeswTlVqYJiYzYEF/200.mp4",
                    "webp_size": "13128",
                    "webp": "https://media3.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/olgeswTlVqYJiYzYEF/200.webp"
                },
                "fixed_height_downsampled": {
                    "height": "200",
                    "width": "154",
                    "size": "31005",
                    "url": "https://media3.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/olgeswTlVqYJiYzYEF/200_d.gif",
                    "webp_size": "26716",
                    "webp": "https://media3.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/olgeswTlVqYJiYzYEF/200_d.webp"
                },
                "fixed_height_small": {
                    "height": "100",
                    "width": "76",
                    "size": "40021",
                    "url": "https://media3.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/olgeswTlVqYJiYzYEF/100.gif",
                    "mp4_size": "6219",
                    "mp4": "https://media3.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/olgeswTlVqYJiYzYEF/100.mp4",
                    "webp_size": "1580",
                    "webp": "https://media3.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/olgeswTlVqYJiYzYEF/100.webp"
                },
                "fixed_width": {
                    "height": "260",
                    "width": "200",
                    "size": "393282",
                    "url": "https://media3.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/olgeswTlVqYJiYzYEF/200w.gif",
                    "mp4_size": "26859",
                    "mp4": "https://media3.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/olgeswTlVqYJiYzYEF/200w.mp4",
                    "webp_size": "9518",
                    "webp": "https://media3.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/olgeswTlVqYJiYzYEF/200w.webp"
                },
                "fixed_width_downsampled": {
                    "height": "260",
                    "width": "200",
                    "size": "61748",
                    "url": "https://media3.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/olgeswTlVqYJiYzYEF/200w_d.gif",
                    "webp_size": "50414",
                    "webp": "https://media3.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/olgeswTlVqYJiYzYEF/200w_d.webp"
                },
                "fixed_width_small": {
                    "height": "132",
                    "width": "100",
                    "size": "85286",
                    "url": "https://media3.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/olgeswTlVqYJiYzYEF/100w.gif",
                    "mp4_size": "8926",
                    "mp4": "https://media3.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/olgeswTlVqYJiYzYEF/100w.mp4",
                    "webp_size": "2360",
                    "webp": "https://media3.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/olgeswTlVqYJiYzYEF/100w.webp"
                }
            },
            "user": {
                "avatar_url": "https://media4.giphy.com/avatars/noxarilty/i0OMoOSEURXT.jpg",
                "banner_image": "",
                "banner_url": "",
                "profile_url": "https://giphy.com/channel/noxarilty/",
                "username": "noxarilty",
                "display_name": "NOXART",
                "description": "",
                "instagram_url": "https://instagram.com/noxarilty noxarilty",
                "website_url": "http://bit.ly/noxariltyserver",
                "is_verified": false
            },
            "analytics_response_payload": "e=ZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD01ZWRhNWI1YjQweXJ4ODRheWI0M3NoM25wbzVxdTgxcHJxM3Zic2hkaXM0ejloeHMmZ2lmX2lkPW9sZ2Vzd1RsVnFZSmlZellFRiZjdD1n",
            "analytics": {
                "onload": {
                    "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD01ZWRhNWI1YjQweXJ4ODRheWI0M3NoM25wbzVxdTgxcHJxM3Zic2hkaXM0ejloeHMmZ2lmX2lkPW9sZ2Vzd1RsVnFZSmlZellFRiZjdD1n&action_type=SEEN"
                },
                "onclick": {
                    "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD01ZWRhNWI1YjQweXJ4ODRheWI0M3NoM25wbzVxdTgxcHJxM3Zic2hkaXM0ejloeHMmZ2lmX2lkPW9sZ2Vzd1RsVnFZSmlZellFRiZjdD1n&action_type=CLICK"
                },
                "onsent": {
                    "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD01ZWRhNWI1YjQweXJ4ODRheWI0M3NoM25wbzVxdTgxcHJxM3Zic2hkaXM0ejloeHMmZ2lmX2lkPW9sZ2Vzd1RsVnFZSmlZellFRiZjdD1n&action_type=SENT"
                }
            },
            "alt_text": "",
            "is_low_contrast": false
        },
        {
            "type": "gif",
            "id": "10t57cXgo7x5kI",
            "url": "https://giphy.com/gifs/smile-funny-10t57cXgo7x5kI",
            "slug": "smile-funny-10t57cXgo7x5kI",
            "bitly_gif_url": "http://gph.is/1aRzQ84",
            "bitly_url": "http://gph.is/1aRzQ84",
            "embed_url": "https://giphy.com/embed/10t57cXgo7x5kI",
            "username": "",
            "source": "",
            "title": "Dog Smile GIF",
            "rating": "g",
            "content_url": "",
            "source_tld": "",
            "source_post_url": "",
            "is_sticker": 0,
            "import_datetime": "2013-06-27 17:12:00",
            "trending_datetime": "2021-03-17 00:45:09",
            "images": {
                "original": {
                    "height": "93",
                    "width": "130",
                    "size": "465502",
                    "url": "https://media4.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/10t57cXgo7x5kI/giphy.gif",
                    "mp4_size": "222031",
                    "mp4": "https://media4.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/10t57cXgo7x5kI/giphy.mp4",
                    "webp_size": "267890",
                    "webp": "https://media4.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/10t57cXgo7x5kI/giphy.webp",
                    "frames": "74",
                    "hash": "a3ee0df84ddcd8202bd626de25e67cff"
                },
                "fixed_height": {
                    "height": "200",
                    "width": "282",
                    "size": "1602491",
                    "url": "https://media4.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/10t57cXgo7x5kI/200.gif",
                    "mp4_size": "752340",
                    "mp4": "https://media4.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/10t57cXgo7x5kI/200.mp4",
                    "webp_size": "653952",
                    "webp": "https://media4.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/10t57cXgo7x5kI/200.webp"
                },
                "fixed_height_downsampled": {
                    "height": "200",
                    "width": "282",
                    "size": "122426",
                    "url": "https://media4.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/10t57cXgo7x5kI/200_d.gif",
                    "webp_size": "78804",
                    "webp": "https://media4.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/10t57cXgo7x5kI/200_d.webp"
                },
                "fixed_height_small": {
                    "height": "100",
                    "width": "142",
                    "size": "542718",
                    "url": "https://media4.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/10t57cXgo7x5kI/100.gif",
                    "mp4_size": "181260",
                    "mp4": "https://media4.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/10t57cXgo7x5kI/100.mp4",
                    "webp_size": "189612",
                    "webp": "https://media4.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/10t57cXgo7x5kI/100.webp"
                },
                "fixed_width": {
                    "height": "142",
                    "width": "200",
                    "size": "976919",
                    "url": "https://media4.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/10t57cXgo7x5kI/200w.gif",
                    "mp4_size": "412333",
                    "mp4": "https://media4.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/10t57cXgo7x5kI/200w.mp4",
                    "webp_size": "325922",
                    "webp": "https://media4.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/10t57cXgo7x5kI/200w.webp"
                },
                "fixed_width_downsampled": {
                    "height": "142",
                    "width": "200",
                    "size": "75538",
                    "url": "https://media4.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/10t57cXgo7x5kI/200w_d.gif",
                    "webp_size": "44820",
                    "webp": "https://media4.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/10t57cXgo7x5kI/200w_d.webp"
                },
                "fixed_width_small": {
                    "height": "72",
                    "width": "100",
                    "size": "307718",
                    "url": "https://media4.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/10t57cXgo7x5kI/100w.gif",
                    "mp4_size": "106907",
                    "mp4": "https://media4.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/10t57cXgo7x5kI/100w.mp4",
                    "webp_size": "117510",
                    "webp": "https://media4.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/10t57cXgo7x5kI/100w.webp"
                }
            },
            "analytics_response_payload": "e=ZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD01ZWRhNWI1YjQweXJ4ODRheWI0M3NoM25wbzVxdTgxcHJxM3Zic2hkaXM0ejloeHMmZ2lmX2lkPTEwdDU3Y1hnbzd4NWtJJmN0PWc",
            "analytics": {
                "onload": {
                    "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD01ZWRhNWI1YjQweXJ4ODRheWI0M3NoM25wbzVxdTgxcHJxM3Zic2hkaXM0ejloeHMmZ2lmX2lkPTEwdDU3Y1hnbzd4NWtJJmN0PWc&action_type=SEEN"
                },
                "onclick": {
                    "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD01ZWRhNWI1YjQweXJ4ODRheWI0M3NoM25wbzVxdTgxcHJxM3Zic2hkaXM0ejloeHMmZ2lmX2lkPTEwdDU3Y1hnbzd4NWtJJmN0PWc&action_type=CLICK"
                },
                "onsent": {
                    "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD01ZWRhNWI1YjQweXJ4ODRheWI0M3NoM25wbzVxdTgxcHJxM3Zic2hkaXM0ejloeHMmZ2lmX2lkPTEwdDU3Y1hnbzd4NWtJJmN0PWc&action_type=SENT"
                }
            },
            "alt_text": "Video gif. A light orange dog, ears flopped to both sides, narrows its eyes and positions its snout in a shy cartoon smile.",
            "is_low_contrast": false
        },
        {
            "type": "gif",
            "id": "KUIXPZFJQfBKDkkRYS",
            "url": "https://giphy.com/gifs/love-heart-big-smile-KUIXPZFJQfBKDkkRYS",
            "slug": "love-heart-big-smile-KUIXPZFJQfBKDkkRYS",
            "bitly_gif_url": "https://gph.is/g/ZWe9pnD",
            "bitly_url": "https://gph.is/g/ZWe9pnD",
            "embed_url": "https://giphy.com/embed/KUIXPZFJQfBKDkkRYS",
            "username": "PomPomClub",
            "source": "",
            "title": "Happy In Love GIF",
            "rating": "g",
            "content_url": "",
            "source_tld": "",
            "source_post_url": "",
            "is_sticker": 0,
            "import_datetime": "2022-02-03 17:16:35",
            "trending_datetime": "0000-00-00 00:00:00",
            "images": {
                "original": {
                    "height": "480",
                    "width": "480",
                    "size": "185695",
                    "url": "https://media1.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/KUIXPZFJQfBKDkkRYS/giphy.gif",
                    "mp4_size": "59799",
                    "mp4": "https://media1.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/KUIXPZFJQfBKDkkRYS/giphy.mp4",
                    "webp_size": "166570",
                    "webp": "https://media1.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/KUIXPZFJQfBKDkkRYS/giphy.webp",
                    "frames": "36",
                    "hash": "d79434bdb26f1f8f2bc15f46a597ad1d"
                },
                "fixed_height": {
                    "height": "200",
                    "width": "200",
                    "size": "67148",
                    "url": "https://media1.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/KUIXPZFJQfBKDkkRYS/200.gif",
                    "mp4_size": "21002",
                    "mp4": "https://media1.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/KUIXPZFJQfBKDkkRYS/200.mp4",
                    "webp_size": "42642",
                    "webp": "https://media1.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/KUIXPZFJQfBKDkkRYS/200.webp"
                },
                "fixed_height_downsampled": {
                    "height": "200",
                    "width": "200",
                    "size": "19168",
                    "url": "https://media1.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/KUIXPZFJQfBKDkkRYS/200_d.gif",
                    "webp_size": "18506",
                    "webp": "https://media1.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/KUIXPZFJQfBKDkkRYS/200_d.webp"
                },
                "fixed_height_small": {
                    "height": "100",
                    "width": "100",
                    "size": "37105",
                    "url": "https://media1.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/KUIXPZFJQfBKDkkRYS/100.gif",
                    "mp4_size": "10123",
                    "mp4": "https://media1.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/KUIXPZFJQfBKDkkRYS/100.mp4",
                    "webp_size": "22386",
                    "webp": "https://media1.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/KUIXPZFJQfBKDkkRYS/100.webp"
                },
                "fixed_width": {
                    "height": "200",
                    "width": "200",
                    "size": "67148",
                    "url": "https://media1.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/KUIXPZFJQfBKDkkRYS/200w.gif",
                    "mp4_size": "21002",
                    "mp4": "https://media1.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/KUIXPZFJQfBKDkkRYS/200w.mp4",
                    "webp_size": "42642",
                    "webp": "https://media1.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/KUIXPZFJQfBKDkkRYS/200w.webp"
                },
                "fixed_width_downsampled": {
                    "height": "200",
                    "width": "200",
                    "size": "19168",
                    "url": "https://media1.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/KUIXPZFJQfBKDkkRYS/200w_d.gif",
                    "webp_size": "18506",
                    "webp": "https://media1.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/KUIXPZFJQfBKDkkRYS/200w_d.webp"
                },
                "fixed_width_small": {
                    "height": "100",
                    "width": "100",
                    "size": "37105",
                    "url": "https://media1.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/KUIXPZFJQfBKDkkRYS/100w.gif",
                    "mp4_size": "10123",
                    "mp4": "https://media1.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/KUIXPZFJQfBKDkkRYS/100w.mp4",
                    "webp_size": "22386",
                    "webp": "https://media1.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/KUIXPZFJQfBKDkkRYS/100w.webp"
                }
            },
            "user": {
                "avatar_url": "https://media4.giphy.com/avatars/PomPomClub/T9AZMOSA2imv.jpg",
                "banner_image": "",
                "banner_url": "",
                "profile_url": "https://giphy.com/channel/PomPomClub/",
                "username": "PomPomClub",
                "display_name": "POM-POM Club",
                "description": "Girl from 1980 stucked in 90s :)\r\nDrawings, creating, discovering &, collecting cute things and toys.",
                "instagram_url": "https://instagram.com/pom.pom.club",
                "website_url": "https://www.pimpandpomme-shop.com/",
                "is_verified": false
            },
            "analytics_response_payload": "e=ZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD01ZWRhNWI1YjQweXJ4ODRheWI0M3NoM25wbzVxdTgxcHJxM3Zic2hkaXM0ejloeHMmZ2lmX2lkPUtVSVhQWkZKUWZCS0Rra1JZUyZjdD1n",
            "analytics": {
                "onload": {
                    "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD01ZWRhNWI1YjQweXJ4ODRheWI0M3NoM25wbzVxdTgxcHJxM3Zic2hkaXM0ejloeHMmZ2lmX2lkPUtVSVhQWkZKUWZCS0Rra1JZUyZjdD1n&action_type=SEEN"
                },
                "onclick": {
                    "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD01ZWRhNWI1YjQweXJ4ODRheWI0M3NoM25wbzVxdTgxcHJxM3Zic2hkaXM0ejloeHMmZ2lmX2lkPUtVSVhQWkZKUWZCS0Rra1JZUyZjdD1n&action_type=CLICK"
                },
                "onsent": {
                    "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD01ZWRhNWI1YjQweXJ4ODRheWI0M3NoM25wbzVxdTgxcHJxM3Zic2hkaXM0ejloeHMmZ2lmX2lkPUtVSVhQWkZKUWZCS0Rra1JZUyZjdD1n&action_type=SENT"
                }
            },
            "alt_text": "",
            "is_low_contrast": false
        },
        {
            "type": "gif",
            "id": "WtOkaikiwaR87ZvAFH",
            "url": "https://giphy.com/gifs/echilibrultau-emoji-emoticon-emojis-WtOkaikiwaR87ZvAFH",
            "slug": "echilibrultau-emoji-emoticon-emojis-WtOkaikiwaR87ZvAFH",
            "bitly_gif_url": "https://gph.is/g/EqRAMVp",
            "bitly_url": "https://gph.is/g/EqRAMVp",
            "embed_url": "https://giphy.com/embed/WtOkaikiwaR87ZvAFH",
            "username": "echilibrultau",
            "source": "",
            "title": "Fun Smile GIF by echilibrultau",
            "rating": "g",
            "content_url": "",
            "source_tld": "",
            "source_post_url": "",
            "is_sticker": 0,
            "import_datetime": "2020-01-21 10:29:08",
            "trending_datetime": "0000-00-00 00:00:00",
            "images": {
                "original": {
                    "height": "480",
                    "width": "480",
                    "size": "431663",
                    "url": "https://media4.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/WtOkaikiwaR87ZvAFH/giphy.gif",
                    "mp4_size": "120230",
                    "mp4": "https://media4.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/WtOkaikiwaR87ZvAFH/giphy.mp4",
                    "webp_size": "161306",
                    "webp": "https://media4.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/WtOkaikiwaR87ZvAFH/giphy.webp",
                    "frames": "12",
                    "hash": "a4b8e6f7c507aa6e7803c5587ddb849c"
                },
                "fixed_height": {
                    "height": "200",
                    "width": "200",
                    "size": "105884",
                    "url": "https://media4.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/WtOkaikiwaR87ZvAFH/200.gif",
                    "mp4_size": "39119",
                    "mp4": "https://media4.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/WtOkaikiwaR87ZvAFH/200.mp4",
                    "webp_size": "56668",
                    "webp": "https://media4.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/WtOkaikiwaR87ZvAFH/200.webp"
                },
                "fixed_height_downsampled": {
                    "height": "200",
                    "width": "200",
                    "size": "52575",
                    "url": "https://media4.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/WtOkaikiwaR87ZvAFH/200_d.gif",
                    "webp_size": "33120",
                    "webp": "https://media4.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/WtOkaikiwaR87ZvAFH/200_d.webp"
                },
                "fixed_height_small": {
                    "height": "100",
                    "width": "100",
                    "size": "40161",
                    "url": "https://media4.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/WtOkaikiwaR87ZvAFH/100.gif",
                    "mp4_size": "16375",
                    "mp4": "https://media4.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/WtOkaikiwaR87ZvAFH/100.mp4",
                    "webp_size": "20520",
                    "webp": "https://media4.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/WtOkaikiwaR87ZvAFH/100.webp"
                },
                "fixed_width": {
                    "height": "200",
                    "width": "200",
                    "size": "105884",
                    "url": "https://media4.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/WtOkaikiwaR87ZvAFH/200w.gif",
                    "mp4_size": "39119",
                    "mp4": "https://media4.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/WtOkaikiwaR87ZvAFH/200w.mp4",
                    "webp_size": "48510",
                    "webp": "https://media4.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/WtOkaikiwaR87ZvAFH/200w.webp"
                },
                "fixed_width_downsampled": {
                    "height": "200",
                    "width": "200",
                    "size": "52575",
                    "url": "https://media4.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/WtOkaikiwaR87ZvAFH/200w_d.gif",
                    "webp_size": "33120",
                    "webp": "https://media4.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/WtOkaikiwaR87ZvAFH/200w_d.webp"
                },
                "fixed_width_small": {
                    "height": "100",
                    "width": "100",
                    "size": "40161",
                    "url": "https://media4.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/WtOkaikiwaR87ZvAFH/100w.gif",
                    "mp4_size": "16375",
                    "mp4": "https://media4.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/WtOkaikiwaR87ZvAFH/100w.mp4",
                    "webp_size": "20520",
                    "webp": "https://media4.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/WtOkaikiwaR87ZvAFH/100w.webp"
                }
            },
            "user": {
                "avatar_url": "https://media4.giphy.com/avatars/echilibrultau/A6fQPjC09k0E.gif",
                "banner_image": "",
                "banner_url": "",
                "profile_url": "https://giphy.com/echilibrultau/",
                "username": "echilibrultau",
                "display_name": "echilibrultau",
                "description": "Consiliere in cabinet sau online!",
                "instagram_url": "https://instagram.com/echilibrultau",
                "website_url": "https://echilibrultau.ro",
                "is_verified": false
            },
            "analytics_response_payload": "e=ZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD01ZWRhNWI1YjQweXJ4ODRheWI0M3NoM25wbzVxdTgxcHJxM3Zic2hkaXM0ejloeHMmZ2lmX2lkPVd0T2thaWtpd2FSODdadkFGSCZjdD1n",
            "analytics": {
                "onload": {
                    "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD01ZWRhNWI1YjQweXJ4ODRheWI0M3NoM25wbzVxdTgxcHJxM3Zic2hkaXM0ejloeHMmZ2lmX2lkPVd0T2thaWtpd2FSODdadkFGSCZjdD1n&action_type=SEEN"
                },
                "onclick": {
                    "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD01ZWRhNWI1YjQweXJ4ODRheWI0M3NoM25wbzVxdTgxcHJxM3Zic2hkaXM0ejloeHMmZ2lmX2lkPVd0T2thaWtpd2FSODdadkFGSCZjdD1n&action_type=CLICK"
                },
                "onsent": {
                    "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD01ZWRhNWI1YjQweXJ4ODRheWI0M3NoM25wbzVxdTgxcHJxM3Zic2hkaXM0ejloeHMmZ2lmX2lkPVd0T2thaWtpd2FSODdadkFGSCZjdD1n&action_type=SENT"
                }
            },
            "alt_text": "Digital art gif. Emoji springing back and forth, thumb and fore finger placed on the temple of its sunglasses, grinning broadly.",
            "is_low_contrast": false
        },
        {
            "type": "gif",
            "id": "7YrnYstmGxYFa",
            "url": "https://giphy.com/gifs/dean-winchester-jensen-ackles-ryan-reynolds-7YrnYstmGxYFa",
            "slug": "dean-winchester-jensen-ackles-ryan-reynolds-7YrnYstmGxYFa",
            "bitly_gif_url": "http://gph.is/1eHAzPb",
            "bitly_url": "http://gph.is/1eHAzPb",
            "embed_url": "https://giphy.com/embed/7YrnYstmGxYFa",
            "username": "",
            "source": "",
            "title": "Ryan Reynolds Smile GIF",
            "rating": "g",
            "content_url": "",
            "source_tld": "",
            "source_post_url": "",
            "is_sticker": 0,
            "import_datetime": "2015-07-09 01:50:25",
            "trending_datetime": "2019-10-23 19:30:10",
            "images": {
                "original": {
                    "height": "208",
                    "width": "429",
                    "size": "400405",
                    "url": "https://media3.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/7YrnYstmGxYFa/giphy.gif",
                    "mp4_size": "150152",
                    "mp4": "https://media3.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/7YrnYstmGxYFa/giphy.mp4",
                    "webp_size": "218532",
                    "webp": "https://media3.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/7YrnYstmGxYFa/giphy.webp",
                    "frames": "15",
                    "hash": "56066d52360d6547aa2f2c18710ae9dc"
                },
                "fixed_height": {
                    "height": "200",
                    "width": "412",
                    "size": "427716",
                    "url": "https://media3.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/7YrnYstmGxYFa/200.gif",
                    "mp4_size": "101298",
                    "mp4": "https://media3.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/7YrnYstmGxYFa/200.mp4",
                    "webp_size": "177076",
                    "webp": "https://media3.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/7YrnYstmGxYFa/200.webp"
                },
                "fixed_height_downsampled": {
                    "height": "200",
                    "width": "412",
                    "size": "173841",
                    "url": "https://media3.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/7YrnYstmGxYFa/200_d.gif",
                    "webp_size": "106148",
                    "webp": "https://media3.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/7YrnYstmGxYFa/200_d.webp"
                },
                "fixed_height_small": {
                    "height": "100",
                    "width": "202",
                    "size": "132298",
                    "url": "https://media3.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/7YrnYstmGxYFa/100.gif",
                    "mp4_size": "27296",
                    "mp4": "https://media3.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/7YrnYstmGxYFa/100.mp4",
                    "webp_size": "48550",
                    "webp": "https://media3.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/7YrnYstmGxYFa/100.webp"
                },
                "fixed_width": {
                    "height": "98",
                    "width": "200",
                    "size": "122828",
                    "url": "https://media3.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/7YrnYstmGxYFa/200w.gif",
                    "mp4_size": "28598",
                    "mp4": "https://media3.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/7YrnYstmGxYFa/200w.mp4",
                    "webp_size": "49114",
                    "webp": "https://media3.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/7YrnYstmGxYFa/200w.webp"
                },
                "fixed_width_downsampled": {
                    "height": "98",
                    "width": "200",
                    "size": "50491",
                    "url": "https://media3.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/7YrnYstmGxYFa/200w_d.gif",
                    "webp_size": "32412",
                    "webp": "https://media3.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/7YrnYstmGxYFa/200w_d.webp"
                },
                "fixed_width_small": {
                    "height": "50",
                    "width": "100",
                    "size": "39042",
                    "url": "https://media3.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/7YrnYstmGxYFa/100w.gif",
                    "mp4_size": "10803",
                    "mp4": "https://media3.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/7YrnYstmGxYFa/100w.mp4",
                    "webp_size": "20844",
                    "webp": "https://media3.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/7YrnYstmGxYFa/100w.webp"
                }
            },
            "analytics_response_payload": "e=ZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD01ZWRhNWI1YjQweXJ4ODRheWI0M3NoM25wbzVxdTgxcHJxM3Zic2hkaXM0ejloeHMmZ2lmX2lkPTdZcm5Zc3RtR3hZRmEmY3Q9Zw",
            "analytics": {
                "onload": {
                    "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD01ZWRhNWI1YjQweXJ4ODRheWI0M3NoM25wbzVxdTgxcHJxM3Zic2hkaXM0ejloeHMmZ2lmX2lkPTdZcm5Zc3RtR3hZRmEmY3Q9Zw&action_type=SEEN"
                },
                "onclick": {
                    "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD01ZWRhNWI1YjQweXJ4ODRheWI0M3NoM25wbzVxdTgxcHJxM3Zic2hkaXM0ejloeHMmZ2lmX2lkPTdZcm5Zc3RtR3hZRmEmY3Q9Zw&action_type=CLICK"
                },
                "onsent": {
                    "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD01ZWRhNWI1YjQweXJ4ODRheWI0M3NoM25wbzVxdTgxcHJxM3Zic2hkaXM0ejloeHMmZ2lmX2lkPTdZcm5Zc3RtR3hZRmEmY3Q9Zw&action_type=SENT"
                }
            },
            "alt_text": "",
            "is_low_contrast": false
        },
        {
            "type": "gif",
            "id": "ytbR5ir7J3EhMGqEMp",
            "url": "https://giphy.com/gifs/smile-smiling-smirk-ytbR5ir7J3EhMGqEMp",
            "slug": "smile-smiling-smirk-ytbR5ir7J3EhMGqEMp",
            "bitly_gif_url": "https://gph.is/g/4MPM3LA",
            "bitly_url": "https://gph.is/g/4MPM3LA",
            "embed_url": "https://giphy.com/embed/ytbR5ir7J3EhMGqEMp",
            "username": "lSirOblivionl",
            "source": "",
            "title": "Cat Smile GIF",
            "rating": "g",
            "content_url": "",
            "source_tld": "",
            "source_post_url": "",
            "is_sticker": 0,
            "import_datetime": "2026-08-23 06:49:10",
            "trending_datetime": "0000-00-00 00:00:00",
            "images": {
                "original": {
                    "height": "480",
                    "width": "426",
                    "size": "1074191",
                    "url": "https://media1.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/ytbR5ir7J3EhMGqEMp/giphy.gif",
                    "mp4_size": "25022",
                    "mp4": "https://media1.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/ytbR5ir7J3EhMGqEMp/giphy.mp4",
                    "webp_size": "155532",
                    "webp": "https://media1.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/ytbR5ir7J3EhMGqEMp/giphy.webp",
                    "frames": "10",
                    "hash": "55ba683feb2c375b1b2c2f43936c2505"
                },
                "fixed_height": {
                    "height": "200",
                    "width": "178",
                    "size": "178286",
                    "url": "https://media1.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/ytbR5ir7J3EhMGqEMp/200.gif",
                    "mp4_size": "7865",
                    "mp4": "https://media1.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/ytbR5ir7J3EhMGqEMp/200.mp4",
                    "webp_size": "52670",
                    "webp": "https://media1.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/ytbR5ir7J3EhMGqEMp/200.webp"
                },
                "fixed_height_downsampled": {
                    "height": "200",
                    "width": "178",
                    "size": "96553",
                    "url": "https://media1.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/ytbR5ir7J3EhMGqEMp/200_d.gif",
                    "webp_size": "26452",
                    "webp": "https://media1.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/ytbR5ir7J3EhMGqEMp/200_d.webp"
                },
                "fixed_height_small": {
                    "height": "100",
                    "width": "88",
                    "size": "42874",
                    "url": "https://media1.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/ytbR5ir7J3EhMGqEMp/100.gif",
                    "mp4_size": "4216",
                    "mp4": "https://media1.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/ytbR5ir7J3EhMGqEMp/100.mp4",
                    "webp_size": "20916",
                    "webp": "https://media1.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/ytbR5ir7J3EhMGqEMp/100.webp"
                },
                "fixed_width": {
                    "height": "226",
                    "width": "200",
                    "size": "225214",
                    "url": "https://media1.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/ytbR5ir7J3EhMGqEMp/200w.gif",
                    "mp4_size": "8996",
                    "mp4": "https://media1.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/ytbR5ir7J3EhMGqEMp/200w.mp4",
                    "webp_size": "60896",
                    "webp": "https://media1.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/ytbR5ir7J3EhMGqEMp/200w.webp"
                },
                "fixed_width_downsampled": {
                    "height": "226",
                    "width": "200",
                    "size": "120947",
                    "url": "https://media1.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/ytbR5ir7J3EhMGqEMp/200w_d.gif",
                    "webp_size": "30570",
                    "webp": "https://media1.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/ytbR5ir7J3EhMGqEMp/200w_d.webp"
                },
                "fixed_width_small": {
                    "height": "112",
                    "width": "100",
                    "size": "54680",
                    "url": "https://media1.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/ytbR5ir7J3EhMGqEMp/100w.gif",
                    "mp4_size": "4486",
                    "mp4": "https://media1.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/ytbR5ir7J3EhMGqEMp/100w.mp4",
                    "webp_size": "24110",
                    "webp": "https://media1.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/ytbR5ir7J3EhMGqEMp/100w.webp"
                }
            },
            "user": {
                "avatar_url": "https://media4.giphy.com/avatars/lSirOblivionl/uHhoPjf8vfMT.gif",
                "banner_image": "",
                "banner_url": "",
                "profile_url": "https://giphy.com/channel/lSirOblivionl/",
                "username": "lSirOblivionl",
                "display_name": "JohnAnimations",
                "description": "Hello",
                "instagram_url": "",
                "website_url": "http://www.deviantart.com/lsiroblivionl/gallery",
                "is_verified": false
            },
            "analytics_response_payload": "e=ZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD01ZWRhNWI1YjQweXJ4ODRheWI0M3NoM25wbzVxdTgxcHJxM3Zic2hkaXM0ejloeHMmZ2lmX2lkPXl0YlI1aXI3SjNFaE1HcUVNcCZjdD1n",
            "analytics": {
                "onload": {
                    "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD01ZWRhNWI1YjQweXJ4ODRheWI0M3NoM25wbzVxdTgxcHJxM3Zic2hkaXM0ejloeHMmZ2lmX2lkPXl0YlI1aXI3SjNFaE1HcUVNcCZjdD1n&action_type=SEEN"
                },
                "onclick": {
                    "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD01ZWRhNWI1YjQweXJ4ODRheWI0M3NoM25wbzVxdTgxcHJxM3Zic2hkaXM0ejloeHMmZ2lmX2lkPXl0YlI1aXI3SjNFaE1HcUVNcCZjdD1n&action_type=CLICK"
                },
                "onsent": {
                    "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD01ZWRhNWI1YjQweXJ4ODRheWI0M3NoM25wbzVxdTgxcHJxM3Zic2hkaXM0ejloeHMmZ2lmX2lkPXl0YlI1aXI3SjNFaE1HcUVNcCZjdD1n&action_type=SENT"
                }
            },
            "alt_text": "",
            "is_low_contrast": false
        },
        {
            "type": "gif",
            "id": "hpEjtJ7gTyuC9BbKvl",
            "url": "https://giphy.com/gifs/happy-smile-face-hpEjtJ7gTyuC9BbKvl",
            "slug": "happy-smile-face-hpEjtJ7gTyuC9BbKvl",
            "bitly_gif_url": "https://gph.is/g/EGqeVR1",
            "bitly_url": "https://gph.is/g/EGqeVR1",
            "embed_url": "https://giphy.com/embed/hpEjtJ7gTyuC9BbKvl",
            "username": "Phillustrations",
            "source": "",
            "title": "Happy Smiley Face GIF",
            "rating": "g",
            "content_url": "",
            "source_tld": "",
            "source_post_url": "",
            "is_sticker": 0,
            "import_datetime": "2019-09-02 20:41:24",
            "trending_datetime": "0000-00-00 00:00:00",
            "images": {
                "original": {
                    "height": "800",
                    "width": "800",
                    "size": "197870",
                    "url": "https://media1.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/hpEjtJ7gTyuC9BbKvl/giphy.gif",
                    "mp4_size": "66976",
                    "mp4": "https://media1.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/hpEjtJ7gTyuC9BbKvl/giphy.mp4",
                    "webp_size": "245236",
                    "webp": "https://media1.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/hpEjtJ7gTyuC9BbKvl/giphy.webp",
                    "frames": "51",
                    "hash": "a206296bd0e4db74477d754d6e4bb4e7"
                },
                "fixed_height": {
                    "height": "200",
                    "width": "200",
                    "size": "49258",
                    "url": "https://media1.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/hpEjtJ7gTyuC9BbKvl/200.gif",
                    "mp4_size": "30842",
                    "mp4": "https://media1.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/hpEjtJ7gTyuC9BbKvl/200.mp4",
                    "webp_size": "71042",
                    "webp": "https://media1.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/hpEjtJ7gTyuC9BbKvl/200.webp"
                },
                "fixed_height_downsampled": {
                    "height": "200",
                    "width": "200",
                    "size": "7843",
                    "url": "https://media1.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/hpEjtJ7gTyuC9BbKvl/200_d.gif",
                    "webp_size": "10106",
                    "webp": "https://media1.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/hpEjtJ7gTyuC9BbKvl/200_d.webp"
                },
                "fixed_height_small": {
                    "height": "100",
                    "width": "100",
                    "size": "27224",
                    "url": "https://media1.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/hpEjtJ7gTyuC9BbKvl/100.gif",
                    "mp4_size": "15463",
                    "mp4": "https://media1.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/hpEjtJ7gTyuC9BbKvl/100.mp4",
                    "webp_size": "37518",
                    "webp": "https://media1.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/hpEjtJ7gTyuC9BbKvl/100.webp"
                },
                "fixed_width": {
                    "height": "200",
                    "width": "200",
                    "size": "49258",
                    "url": "https://media1.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/hpEjtJ7gTyuC9BbKvl/200w.gif",
                    "mp4_size": "30842",
                    "mp4": "https://media1.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/hpEjtJ7gTyuC9BbKvl/200w.mp4",
                    "webp_size": "71042",
                    "webp": "https://media1.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/hpEjtJ7gTyuC9BbKvl/200w.webp"
                },
                "fixed_width_downsampled": {
                    "height": "200",
                    "width": "200",
                    "size": "7843",
                    "url": "https://media1.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/hpEjtJ7gTyuC9BbKvl/200w_d.gif",
                    "webp_size": "10106",
                    "webp": "https://media1.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/hpEjtJ7gTyuC9BbKvl/200w_d.webp"
                },
                "fixed_width_small": {
                    "height": "100",
                    "width": "100",
                    "size": "27224",
                    "url": "https://media1.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/hpEjtJ7gTyuC9BbKvl/100w.gif",
                    "mp4_size": "15463",
                    "mp4": "https://media1.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/hpEjtJ7gTyuC9BbKvl/100w.mp4",
                    "webp_size": "37518",
                    "webp": "https://media1.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/hpEjtJ7gTyuC9BbKvl/100w.webp"
                }
            },
            "user": {
                "avatar_url": "https://media4.giphy.com/avatars/Phillustrations/pLdDSrzgh1Fa.gif",
                "banner_image": "",
                "banner_url": "",
                "profile_url": "https://giphy.com/channel/Phillustrations/",
                "username": "Phillustrations",
                "display_name": "Phillustrations",
                "description": "GIF sticker maker / illustrator from the Pacific Northwest. I specialize in motion design, illustration, and graphic design.",
                "instagram_url": "https://instagram.com/phillustrations",
                "website_url": "https://phillustrations.com",
                "is_verified": false
            },
            "analytics_response_payload": "e=ZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD01ZWRhNWI1YjQweXJ4ODRheWI0M3NoM25wbzVxdTgxcHJxM3Zic2hkaXM0ejloeHMmZ2lmX2lkPWhwRWp0SjdnVHl1QzlCYkt2bCZjdD1n",
            "analytics": {
                "onload": {
                    "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD01ZWRhNWI1YjQweXJ4ODRheWI0M3NoM25wbzVxdTgxcHJxM3Zic2hkaXM0ejloeHMmZ2lmX2lkPWhwRWp0SjdnVHl1QzlCYkt2bCZjdD1n&action_type=SEEN"
                },
                "onclick": {
                    "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD01ZWRhNWI1YjQweXJ4ODRheWI0M3NoM25wbzVxdTgxcHJxM3Zic2hkaXM0ejloeHMmZ2lmX2lkPWhwRWp0SjdnVHl1QzlCYkt2bCZjdD1n&action_type=CLICK"
                },
                "onsent": {
                    "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD01ZWRhNWI1YjQweXJ4ODRheWI0M3NoM25wbzVxdTgxcHJxM3Zic2hkaXM0ejloeHMmZ2lmX2lkPWhwRWp0SjdnVHl1QzlCYkt2bCZjdD1n&action_type=SENT"
                }
            },
            "alt_text": "",
            "is_low_contrast": false
        },
        {
            "type": "gif",
            "id": "IbfNMwhZKr7lC",
            "url": "https://giphy.com/gifs/smile-grin-IbfNMwhZKr7lC",
            "slug": "smile-grin-IbfNMwhZKr7lC",
            "bitly_gif_url": "http://gph.is/2eZj81i",
            "bitly_url": "http://gph.is/2eZj81i",
            "embed_url": "https://giphy.com/embed/IbfNMwhZKr7lC",
            "username": "",
            "source": "",
            "title": "grin smile GIF",
            "rating": "g",
            "content_url": "",
            "source_tld": "",
            "source_post_url": "",
            "is_sticker": 0,
            "import_datetime": "2016-11-21 17:36:34",
            "trending_datetime": "0000-00-00 00:00:00",
            "images": {
                "original": {
                    "height": "274",
                    "width": "400",
                    "size": "849633",
                    "url": "https://media1.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/IbfNMwhZKr7lC/giphy.gif",
                    "mp4_size": "116656",
                    "mp4": "https://media1.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/IbfNMwhZKr7lC/giphy.mp4",
                    "webp_size": "377156",
                    "webp": "https://media1.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/IbfNMwhZKr7lC/giphy.webp",
                    "frames": "24",
                    "hash": "660f8644e9d09d02c864b6ca7b192d73"
                },
                "fixed_height": {
                    "height": "200",
                    "width": "292",
                    "size": "361636",
                    "url": "https://media1.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/IbfNMwhZKr7lC/200.gif",
                    "mp4_size": "25245",
                    "mp4": "https://media1.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/IbfNMwhZKr7lC/200.mp4",
                    "webp_size": "172682",
                    "webp": "https://media1.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/IbfNMwhZKr7lC/200.webp"
                },
                "fixed_height_downsampled": {
                    "height": "200",
                    "width": "292",
                    "size": "84099",
                    "url": "https://media1.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/IbfNMwhZKr7lC/200_d.gif",
                    "webp_size": "55438",
                    "webp": "https://media1.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/IbfNMwhZKr7lC/200_d.webp"
                },
                "fixed_height_small": {
                    "height": "100",
                    "width": "144",
                    "size": "117345",
                    "url": "https://media1.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/IbfNMwhZKr7lC/100.gif",
                    "mp4_size": "9003",
                    "mp4": "https://media1.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/IbfNMwhZKr7lC/100.mp4",
                    "webp_size": "60804",
                    "webp": "https://media1.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/IbfNMwhZKr7lC/100.webp"
                },
                "fixed_width": {
                    "height": "138",
                    "width": "200",
                    "size": "199842",
                    "url": "https://media1.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/IbfNMwhZKr7lC/200w.gif",
                    "mp4_size": "13443",
                    "mp4": "https://media1.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/IbfNMwhZKr7lC/200w.mp4",
                    "webp_size": "91934",
                    "webp": "https://media1.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/IbfNMwhZKr7lC/200w.webp"
                },
                "fixed_width_downsampled": {
                    "height": "138",
                    "width": "200",
                    "size": "46344",
                    "url": "https://media1.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/IbfNMwhZKr7lC/200w_d.gif",
                    "webp_size": "32426",
                    "webp": "https://media1.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/IbfNMwhZKr7lC/200w_d.webp"
                },
                "fixed_width_small": {
                    "height": "70",
                    "width": "100",
                    "size": "65252",
                    "url": "https://media1.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/IbfNMwhZKr7lC/100w.gif",
                    "mp4_size": "6072",
                    "mp4": "https://media1.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/IbfNMwhZKr7lC/100w.mp4",
                    "webp_size": "39264",
                    "webp": "https://media1.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/IbfNMwhZKr7lC/100w.webp"
                }
            },
            "analytics_response_payload": "e=ZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD01ZWRhNWI1YjQweXJ4ODRheWI0M3NoM25wbzVxdTgxcHJxM3Zic2hkaXM0ejloeHMmZ2lmX2lkPUliZk5Nd2haS3I3bEMmY3Q9Zw",
            "analytics": {
                "onload": {
                    "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD01ZWRhNWI1YjQweXJ4ODRheWI0M3NoM25wbzVxdTgxcHJxM3Zic2hkaXM0ejloeHMmZ2lmX2lkPUliZk5Nd2haS3I3bEMmY3Q9Zw&action_type=SEEN"
                },
                "onclick": {
                    "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD01ZWRhNWI1YjQweXJ4ODRheWI0M3NoM25wbzVxdTgxcHJxM3Zic2hkaXM0ejloeHMmZ2lmX2lkPUliZk5Nd2haS3I3bEMmY3Q9Zw&action_type=CLICK"
                },
                "onsent": {
                    "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD01ZWRhNWI1YjQweXJ4ODRheWI0M3NoM25wbzVxdTgxcHJxM3Zic2hkaXM0ejloeHMmZ2lmX2lkPUliZk5Nd2haS3I3bEMmY3Q9Zw&action_type=SENT"
                }
            },
            "alt_text": "",
            "is_low_contrast": false
        },
        {
            "type": "gif",
            "id": "osR6w3wqx2xxUmR9Jc",
            "url": "https://giphy.com/gifs/querolubi-smile-muitolubi-mauriciolubi-osR6w3wqx2xxUmR9Jc",
            "slug": "querolubi-smile-muitolubi-mauriciolubi-osR6w3wqx2xxUmR9Jc",
            "bitly_gif_url": "https://gph.is/g/ajeYL8n",
            "bitly_url": "https://gph.is/g/ajeYL8n",
            "embed_url": "https://giphy.com/embed/osR6w3wqx2xxUmR9Jc",
            "username": "querolubi",
            "source": "",
            "title": "Carinha Smile GIF by querolubi",
            "rating": "g",
            "content_url": "",
            "source_tld": "",
            "source_post_url": "",
            "is_sticker": 0,
            "import_datetime": "2022-04-25 13:23:37",
            "trending_datetime": "0000-00-00 00:00:00",
            "images": {
                "original": {
                    "height": "466",
                    "width": "480",
                    "size": "101223",
                    "url": "https://media1.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/osR6w3wqx2xxUmR9Jc/giphy.gif",
                    "mp4_size": "28768",
                    "mp4": "https://media1.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/osR6w3wqx2xxUmR9Jc/giphy.mp4",
                    "webp_size": "38274",
                    "webp": "https://media1.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/osR6w3wqx2xxUmR9Jc/giphy.webp",
                    "frames": "7",
                    "hash": "52e890269f0e2714ef50fd9596c21e1e"
                },
                "fixed_height": {
                    "height": "200",
                    "width": "206",
                    "size": "24510",
                    "url": "https://media1.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/osR6w3wqx2xxUmR9Jc/200.gif",
                    "mp4_size": "10784",
                    "mp4": "https://media1.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/osR6w3wqx2xxUmR9Jc/200.mp4",
                    "webp_size": "18170",
                    "webp": "https://media1.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/osR6w3wqx2xxUmR9Jc/200.webp"
                },
                "fixed_height_downsampled": {
                    "height": "200",
                    "width": "206",
                    "size": "18164",
                    "url": "https://media1.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/osR6w3wqx2xxUmR9Jc/200_d.gif",
                    "webp_size": "15390",
                    "webp": "https://media1.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/osR6w3wqx2xxUmR9Jc/200_d.webp"
                },
                "fixed_height_small": {
                    "height": "100",
                    "width": "103",
                    "size": "11441",
                    "url": "https://media1.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/osR6w3wqx2xxUmR9Jc/100.gif",
                    "mp4_size": "5605",
                    "mp4": "https://media1.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/osR6w3wqx2xxUmR9Jc/100.mp4",
                    "webp_size": "7266",
                    "webp": "https://media1.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/osR6w3wqx2xxUmR9Jc/100.webp"
                },
                "fixed_width": {
                    "height": "194",
                    "width": "200",
                    "size": "23925",
                    "url": "https://media1.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/osR6w3wqx2xxUmR9Jc/200w.gif",
                    "mp4_size": "10782",
                    "mp4": "https://media1.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/osR6w3wqx2xxUmR9Jc/200w.mp4",
                    "webp_size": "17494",
                    "webp": "https://media1.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/osR6w3wqx2xxUmR9Jc/200w.webp"
                },
                "fixed_width_downsampled": {
                    "height": "194",
                    "width": "200",
                    "size": "17726",
                    "url": "https://media1.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/osR6w3wqx2xxUmR9Jc/200w_d.gif",
                    "webp_size": "15174",
                    "webp": "https://media1.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/osR6w3wqx2xxUmR9Jc/200w_d.webp"
                },
                "fixed_width_small": {
                    "height": "97",
                    "width": "100",
                    "size": "11334",
                    "url": "https://media1.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/osR6w3wqx2xxUmR9Jc/100w.gif",
                    "mp4_size": "5669",
                    "mp4": "https://media1.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/osR6w3wqx2xxUmR9Jc/100w.mp4",
                    "webp_size": "7610",
                    "webp": "https://media1.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/osR6w3wqx2xxUmR9Jc/100w.webp"
                }
            },
            "user": {
                "avatar_url": "https://media4.giphy.com/avatars/querolubi/Ky3AZX8lcTao.png",
                "banner_image": "",
                "banner_url": "",
                "profile_url": "https://giphy.com/querolubi/",
                "username": "querolubi",
                "display_name": "querolubi",
                "description": "",
                "instagram_url": "https://instagram.com/querolubi",
                "website_url": "http://www.querolubi.com",
                "is_verified": false
            },
            "analytics_response_payload": "e=ZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD01ZWRhNWI1YjQweXJ4ODRheWI0M3NoM25wbzVxdTgxcHJxM3Zic2hkaXM0ejloeHMmZ2lmX2lkPW9zUjZ3M3dxeDJ4eFVtUjlKYyZjdD1n",
            "analytics": {
                "onload": {
                    "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD01ZWRhNWI1YjQweXJ4ODRheWI0M3NoM25wbzVxdTgxcHJxM3Zic2hkaXM0ejloeHMmZ2lmX2lkPW9zUjZ3M3dxeDJ4eFVtUjlKYyZjdD1n&action_type=SEEN"
                },
                "onclick": {
                    "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD01ZWRhNWI1YjQweXJ4ODRheWI0M3NoM25wbzVxdTgxcHJxM3Zic2hkaXM0ejloeHMmZ2lmX2lkPW9zUjZ3M3dxeDJ4eFVtUjlKYyZjdD1n&action_type=CLICK"
                },
                "onsent": {
                    "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD01ZWRhNWI1YjQweXJ4ODRheWI0M3NoM25wbzVxdTgxcHJxM3Zic2hkaXM0ejloeHMmZ2lmX2lkPW9zUjZ3M3dxeDJ4eFVtUjlKYyZjdD1n&action_type=SENT"
                }
            },
            "alt_text": "",
            "is_low_contrast": false
        },
        {
            "type": "gif",
            "id": "9pZw57AyqOHy47oSZq",
            "url": "https://giphy.com/gifs/laff-tv-smile-john-candy-uncle-buck-9pZw57AyqOHy47oSZq",
            "slug": "laff-tv-smile-john-candy-uncle-buck-9pZw57AyqOHy47oSZq",
            "bitly_gif_url": "https://gph.is/g/aNBpANM",
            "bitly_url": "https://gph.is/g/aNBpANM",
            "embed_url": "https://giphy.com/embed/9pZw57AyqOHy47oSZq",
            "username": "laff_tv",
            "source": "",
            "title": "Happy John Candy GIF by Laff",
            "rating": "g",
            "content_url": "",
            "source_tld": "",
            "source_post_url": "",
            "is_sticker": 0,
            "import_datetime": "2022-05-11 14:35:44",
            "trending_datetime": "0000-00-00 00:00:00",
            "images": {
                "original": {
                    "height": "400",
                    "width": "400",
                    "size": "920599",
                    "url": "https://media0.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/9pZw57AyqOHy47oSZq/giphy.gif",
                    "mp4_size": "294595",
                    "mp4": "https://media0.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/9pZw57AyqOHy47oSZq/giphy.mp4",
                    "webp_size": "321690",
                    "webp": "https://media0.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/9pZw57AyqOHy47oSZq/giphy.webp",
                    "frames": "16",
                    "hash": "a90575b5964e351dfbd2a6d208dd52c9"
                },
                "fixed_height": {
                    "height": "200",
                    "width": "200",
                    "size": "226375",
                    "url": "https://media0.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/9pZw57AyqOHy47oSZq/200.gif",
                    "mp4_size": "52391",
                    "mp4": "https://media0.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/9pZw57AyqOHy47oSZq/200.mp4",
                    "webp_size": "96548",
                    "webp": "https://media0.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/9pZw57AyqOHy47oSZq/200.webp"
                },
                "fixed_height_downsampled": {
                    "height": "200",
                    "width": "200",
                    "size": "80832",
                    "url": "https://media0.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/9pZw57AyqOHy47oSZq/200_d.gif",
                    "webp_size": "52686",
                    "webp": "https://media0.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/9pZw57AyqOHy47oSZq/200_d.webp"
                },
                "fixed_height_small": {
                    "height": "100",
                    "width": "100",
                    "size": "74363",
                    "url": "https://media0.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/9pZw57AyqOHy47oSZq/100.gif",
                    "mp4_size": "15920",
                    "mp4": "https://media0.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/9pZw57AyqOHy47oSZq/100.mp4",
                    "webp_size": "27108",
                    "webp": "https://media0.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/9pZw57AyqOHy47oSZq/100.webp"
                },
                "fixed_width": {
                    "height": "200",
                    "width": "200",
                    "size": "226375",
                    "url": "https://media0.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/9pZw57AyqOHy47oSZq/200w.gif",
                    "mp4_size": "52391",
                    "mp4": "https://media0.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/9pZw57AyqOHy47oSZq/200w.mp4",
                    "webp_size": "75614",
                    "webp": "https://media0.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/9pZw57AyqOHy47oSZq/200w.webp"
                },
                "fixed_width_downsampled": {
                    "height": "200",
                    "width": "200",
                    "size": "80832",
                    "url": "https://media0.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/9pZw57AyqOHy47oSZq/200w_d.gif",
                    "webp_size": "52686",
                    "webp": "https://media0.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/9pZw57AyqOHy47oSZq/200w_d.webp"
                },
                "fixed_width_small": {
                    "height": "100",
                    "width": "100",
                    "size": "74363",
                    "url": "https://media0.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/9pZw57AyqOHy47oSZq/100w.gif",
                    "mp4_size": "15920",
                    "mp4": "https://media0.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/9pZw57AyqOHy47oSZq/100w.mp4",
                    "webp_size": "27108",
                    "webp": "https://media0.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/9pZw57AyqOHy47oSZq/100w.webp"
                }
            },
            "user": {
                "avatar_url": "https://media4.giphy.com/avatars/laff_tv/QXDT0bDd2v2e.jpg",
                "banner_image": "https://media4.giphy.com/headers/laff_tv/jutfRtzgElxt.gif",
                "banner_url": "https://media4.giphy.com/headers/laff_tv/jutfRtzgElxt.gif",
                "profile_url": "https://giphy.com/laff_tv/",
                "username": "laff_tv",
                "display_name": "Laff",
                "description": "",
                "instagram_url": "https://instagram.com/lafftv",
                "website_url": "",
                "is_verified": true
            },
            "analytics_response_payload": "e=ZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD01ZWRhNWI1YjQweXJ4ODRheWI0M3NoM25wbzVxdTgxcHJxM3Zic2hkaXM0ejloeHMmZ2lmX2lkPTlwWnc1N0F5cU9IeTQ3b1NacSZjdD1n",
            "analytics": {
                "onload": {
                    "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD01ZWRhNWI1YjQweXJ4ODRheWI0M3NoM25wbzVxdTgxcHJxM3Zic2hkaXM0ejloeHMmZ2lmX2lkPTlwWnc1N0F5cU9IeTQ3b1NacSZjdD1n&action_type=SEEN"
                },
                "onclick": {
                    "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD01ZWRhNWI1YjQweXJ4ODRheWI0M3NoM25wbzVxdTgxcHJxM3Zic2hkaXM0ejloeHMmZ2lmX2lkPTlwWnc1N0F5cU9IeTQ3b1NacSZjdD1n&action_type=CLICK"
                },
                "onsent": {
                    "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD01ZWRhNWI1YjQweXJ4ODRheWI0M3NoM25wbzVxdTgxcHJxM3Zic2hkaXM0ejloeHMmZ2lmX2lkPTlwWnc1N0F5cU9IeTQ3b1NacSZjdD1n&action_type=SENT"
                }
            },
            "alt_text": "Movie gif. John Candy as Uncle Buck turns his head and gives a cheesy grin.",
            "is_low_contrast": false
        },
        {
            "type": "gif",
            "id": "VABbCpX94WCfS",
            "url": "https://giphy.com/gifs/VABbCpX94WCfS",
            "slug": "VABbCpX94WCfS",
            "bitly_gif_url": "http://gph.is/1wNKDMX",
            "bitly_url": "http://gph.is/1wNKDMX",
            "embed_url": "https://giphy.com/embed/VABbCpX94WCfS",
            "username": "",
            "source": "",
            "title": "Happy Little Girl GIF",
            "rating": "g",
            "content_url": "",
            "source_tld": "",
            "source_post_url": "",
            "is_sticker": 0,
            "import_datetime": "2014-09-19 06:12:19",
            "trending_datetime": "2019-06-29 19:45:01",
            "images": {
                "original": {
                    "height": "254",
                    "width": "480",
                    "size": "1093938",
                    "url": "https://media4.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/VABbCpX94WCfS/giphy.gif",
                    "mp4_size": "235060",
                    "mp4": "https://media4.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/VABbCpX94WCfS/giphy.mp4",
                    "webp_size": "512054",
                    "webp": "https://media4.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/VABbCpX94WCfS/giphy.webp",
                    "frames": "18",
                    "hash": "5bc384cfb12de26b3c7e9e03f25bdc6b"
                },
                "fixed_height": {
                    "height": "200",
                    "width": "378",
                    "size": "632429",
                    "url": "https://media4.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/VABbCpX94WCfS/200.gif",
                    "mp4_size": "235141",
                    "mp4": "https://media4.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/VABbCpX94WCfS/200.mp4",
                    "webp_size": "336902",
                    "webp": "https://media4.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/VABbCpX94WCfS/200.webp"
                },
                "fixed_height_downsampled": {
                    "height": "200",
                    "width": "378",
                    "size": "202461",
                    "url": "https://media4.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/VABbCpX94WCfS/200_d.gif",
                    "webp_size": "142382",
                    "webp": "https://media4.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/VABbCpX94WCfS/200_d.webp"
                },
                "fixed_height_small": {
                    "height": "100",
                    "width": "186",
                    "size": "176557",
                    "url": "https://media4.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/VABbCpX94WCfS/100.gif",
                    "mp4_size": "63908",
                    "mp4": "https://media4.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/VABbCpX94WCfS/100.mp4",
                    "webp_size": "87554",
                    "webp": "https://media4.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/VABbCpX94WCfS/100.webp"
                },
                "fixed_width": {
                    "height": "106",
                    "width": "200",
                    "size": "190906",
                    "url": "https://media4.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/VABbCpX94WCfS/200w.gif",
                    "mp4_size": "70272",
                    "mp4": "https://media4.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/VABbCpX94WCfS/200w.mp4",
                    "webp_size": "101384",
                    "webp": "https://media4.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/VABbCpX94WCfS/200w.webp"
                },
                "fixed_width_downsampled": {
                    "height": "106",
                    "width": "200",
                    "size": "64246",
                    "url": "https://media4.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/VABbCpX94WCfS/200w_d.gif",
                    "webp_size": "47532",
                    "webp": "https://media4.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/VABbCpX94WCfS/200w_d.webp"
                },
                "fixed_width_small": {
                    "height": "54",
                    "width": "100",
                    "size": "50629",
                    "url": "https://media4.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/VABbCpX94WCfS/100w.gif",
                    "mp4_size": "20854",
                    "mp4": "https://media4.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/VABbCpX94WCfS/100w.mp4",
                    "webp_size": "32792",
                    "webp": "https://media4.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/VABbCpX94WCfS/100w.webp"
                }
            },
            "analytics_response_payload": "e=ZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD01ZWRhNWI1YjQweXJ4ODRheWI0M3NoM25wbzVxdTgxcHJxM3Zic2hkaXM0ejloeHMmZ2lmX2lkPVZBQmJDcFg5NFdDZlMmY3Q9Zw",
            "analytics": {
                "onload": {
                    "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD01ZWRhNWI1YjQweXJ4ODRheWI0M3NoM25wbzVxdTgxcHJxM3Zic2hkaXM0ejloeHMmZ2lmX2lkPVZBQmJDcFg5NFdDZlMmY3Q9Zw&action_type=SEEN"
                },
                "onclick": {
                    "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD01ZWRhNWI1YjQweXJ4ODRheWI0M3NoM25wbzVxdTgxcHJxM3Zic2hkaXM0ejloeHMmZ2lmX2lkPVZBQmJDcFg5NFdDZlMmY3Q9Zw&action_type=CLICK"
                },
                "onsent": {
                    "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD01ZWRhNWI1YjQweXJ4ODRheWI0M3NoM25wbzVxdTgxcHJxM3Zic2hkaXM0ejloeHMmZ2lmX2lkPVZBQmJDcFg5NFdDZlMmY3Q9Zw&action_type=SENT"
                }
            },
            "alt_text": "",
            "is_low_contrast": false
        },
        {
            "type": "gif",
            "id": "x7gjmBuaHrWak",
            "url": "https://giphy.com/gifs/smile-grinch-maniacal-x7gjmBuaHrWak",
            "slug": "smile-grinch-maniacal-x7gjmBuaHrWak",
            "bitly_gif_url": "http://gph.is/1a69oKD",
            "bitly_url": "http://gph.is/1a69oKD",
            "embed_url": "https://giphy.com/embed/x7gjmBuaHrWak",
            "username": "",
            "source": "",
            "title": "Grinch Smile GIF",
            "rating": "g",
            "content_url": "",
            "source_tld": "",
            "source_post_url": "",
            "is_sticker": 0,
            "import_datetime": "2014-01-31 11:54:52",
            "trending_datetime": "1970-01-01 00:00:00",
            "images": {
                "original": {
                    "height": "236",
                    "width": "160",
                    "size": "289416",
                    "url": "https://media1.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/x7gjmBuaHrWak/giphy.gif",
                    "mp4_size": "268166",
                    "mp4": "https://media1.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/x7gjmBuaHrWak/giphy.mp4",
                    "webp_size": "297766",
                    "webp": "https://media1.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/x7gjmBuaHrWak/giphy.webp",
                    "frames": "45",
                    "hash": "57e29cb9f317d110475ba6cfcc14d3f8"
                },
                "fixed_height": {
                    "height": "200",
                    "width": "136",
                    "size": "272806",
                    "url": "https://media1.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/x7gjmBuaHrWak/200.gif",
                    "mp4_size": "158347",
                    "mp4": "https://media1.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/x7gjmBuaHrWak/200.mp4",
                    "webp_size": "221362",
                    "webp": "https://media1.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/x7gjmBuaHrWak/200.webp"
                },
                "fixed_height_downsampled": {
                    "height": "200",
                    "width": "136",
                    "size": "33771",
                    "url": "https://media1.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/x7gjmBuaHrWak/200_d.gif",
                    "webp_size": "28792",
                    "webp": "https://media1.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/x7gjmBuaHrWak/200_d.webp"
                },
                "fixed_height_small": {
                    "height": "100",
                    "width": "66",
                    "size": "94673",
                    "url": "https://media1.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/x7gjmBuaHrWak/100.gif",
                    "mp4_size": "44327",
                    "mp4": "https://media1.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/x7gjmBuaHrWak/100.mp4",
                    "webp_size": "66296",
                    "webp": "https://media1.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/x7gjmBuaHrWak/100.webp"
                },
                "fixed_width": {
                    "height": "296",
                    "width": "200",
                    "size": "538116",
                    "url": "https://media1.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/x7gjmBuaHrWak/200w.gif",
                    "mp4_size": "355088",
                    "mp4": "https://media1.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/x7gjmBuaHrWak/200w.mp4",
                    "webp_size": "334668",
                    "webp": "https://media1.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/x7gjmBuaHrWak/200w.webp"
                },
                "fixed_width_downsampled": {
                    "height": "296",
                    "width": "200",
                    "size": "66293",
                    "url": "https://media1.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/x7gjmBuaHrWak/200w_d.gif",
                    "webp_size": "51998",
                    "webp": "https://media1.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/x7gjmBuaHrWak/200w_d.webp"
                },
                "fixed_width_small": {
                    "height": "148",
                    "width": "100",
                    "size": "170454",
                    "url": "https://media1.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/x7gjmBuaHrWak/100w.gif",
                    "mp4_size": "94828",
                    "mp4": "https://media1.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/x7gjmBuaHrWak/100w.mp4",
                    "webp_size": "119970",
                    "webp": "https://media1.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/x7gjmBuaHrWak/100w.webp"
                }
            },
            "analytics_response_payload": "e=ZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD01ZWRhNWI1YjQweXJ4ODRheWI0M3NoM25wbzVxdTgxcHJxM3Zic2hkaXM0ejloeHMmZ2lmX2lkPXg3Z2ptQnVhSHJXYWsmY3Q9Zw",
            "analytics": {
                "onload": {
                    "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD01ZWRhNWI1YjQweXJ4ODRheWI0M3NoM25wbzVxdTgxcHJxM3Zic2hkaXM0ejloeHMmZ2lmX2lkPXg3Z2ptQnVhSHJXYWsmY3Q9Zw&action_type=SEEN"
                },
                "onclick": {
                    "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD01ZWRhNWI1YjQweXJ4ODRheWI0M3NoM25wbzVxdTgxcHJxM3Zic2hkaXM0ejloeHMmZ2lmX2lkPXg3Z2ptQnVhSHJXYWsmY3Q9Zw&action_type=CLICK"
                },
                "onsent": {
                    "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD01ZWRhNWI1YjQweXJ4ODRheWI0M3NoM25wbzVxdTgxcHJxM3Zic2hkaXM0ejloeHMmZ2lmX2lkPXg3Z2ptQnVhSHJXYWsmY3Q9Zw&action_type=SENT"
                }
            },
            "alt_text": "Cartoon gif. The Grinch's eyes lower slowly as he smirks, then begins to smile, cheeks curling back, the lines around his face and eyes becoming more and more exaggerated as the seconds go by. The strands of hair standing on end on top of his head come alive, curling in on themselves then back out in a straight line, moving in time with his smile.",
            "is_low_contrast": false
        },
        {
            "type": "gif",
            "id": "eruVMzXlb70oo",
            "url": "https://giphy.com/gifs/smile-mike-tyson-eruVMzXlb70oo",
            "slug": "smile-mike-tyson-eruVMzXlb70oo",
            "bitly_gif_url": "http://gph.is/19mX9sO",
            "bitly_url": "http://gph.is/19mX9sO",
            "embed_url": "https://giphy.com/embed/eruVMzXlb70oo",
            "username": "",
            "source": "",
            "title": "Mike Tyson Smile GIF",
            "rating": "g",
            "content_url": "",
            "source_tld": "",
            "source_post_url": "",
            "is_sticker": 0,
            "import_datetime": "2014-01-12 20:15:56",
            "trending_datetime": "2020-11-29 02:22:34",
            "images": {
                "original": {
                    "height": "266",
                    "width": "300",
                    "size": "1326173",
                    "url": "https://media4.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/eruVMzXlb70oo/giphy.gif",
                    "mp4_size": "586647",
                    "mp4": "https://media4.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/eruVMzXlb70oo/giphy.mp4",
                    "webp_size": "490076",
                    "webp": "https://media4.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/eruVMzXlb70oo/giphy.webp",
                    "frames": "51",
                    "hash": "eb175afe5ef76a9d64d5d83b28ff1869"
                },
                "fixed_height": {
                    "height": "200",
                    "width": "226",
                    "size": "721796",
                    "url": "https://media4.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/eruVMzXlb70oo/200.gif",
                    "mp4_size": "316186",
                    "mp4": "https://media4.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/eruVMzXlb70oo/200.mp4",
                    "webp_size": "322448",
                    "webp": "https://media4.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/eruVMzXlb70oo/200.webp"
                },
                "fixed_height_downsampled": {
                    "height": "200",
                    "width": "226",
                    "size": "78726",
                    "url": "https://media4.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/eruVMzXlb70oo/200_d.gif",
                    "webp_size": "53512",
                    "webp": "https://media4.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/eruVMzXlb70oo/200_d.webp"
                },
                "fixed_height_small": {
                    "height": "100",
                    "width": "112",
                    "size": "233974",
                    "url": "https://media4.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/eruVMzXlb70oo/100.gif",
                    "mp4_size": "76891",
                    "mp4": "https://media4.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/eruVMzXlb70oo/100.mp4",
                    "webp_size": "85866",
                    "webp": "https://media4.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/eruVMzXlb70oo/100.webp"
                },
                "fixed_width": {
                    "height": "178",
                    "width": "200",
                    "size": "579539",
                    "url": "https://media4.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/eruVMzXlb70oo/200w.gif",
                    "mp4_size": "271499",
                    "mp4": "https://media4.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/eruVMzXlb70oo/200w.mp4",
                    "webp_size": "210142",
                    "webp": "https://media4.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/eruVMzXlb70oo/200w.webp"
                },
                "fixed_width_downsampled": {
                    "height": "178",
                    "width": "200",
                    "size": "63568",
                    "url": "https://media4.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/eruVMzXlb70oo/200w_d.gif",
                    "webp_size": "43768",
                    "webp": "https://media4.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/eruVMzXlb70oo/200w_d.webp"
                },
                "fixed_width_small": {
                    "height": "90",
                    "width": "100",
                    "size": "199560",
                    "url": "https://media4.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/eruVMzXlb70oo/100w.gif",
                    "mp4_size": "70193",
                    "mp4": "https://media4.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/eruVMzXlb70oo/100w.mp4",
                    "webp_size": "75860",
                    "webp": "https://media4.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/eruVMzXlb70oo/100w.webp"
                }
            },
            "analytics_response_payload": "e=ZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD01ZWRhNWI1YjQweXJ4ODRheWI0M3NoM25wbzVxdTgxcHJxM3Zic2hkaXM0ejloeHMmZ2lmX2lkPWVydVZNelhsYjcwb28mY3Q9Zw",
            "analytics": {
                "onload": {
                    "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD01ZWRhNWI1YjQweXJ4ODRheWI0M3NoM25wbzVxdTgxcHJxM3Zic2hkaXM0ejloeHMmZ2lmX2lkPWVydVZNelhsYjcwb28mY3Q9Zw&action_type=SEEN"
                },
                "onclick": {
                    "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD01ZWRhNWI1YjQweXJ4ODRheWI0M3NoM25wbzVxdTgxcHJxM3Zic2hkaXM0ejloeHMmZ2lmX2lkPWVydVZNelhsYjcwb28mY3Q9Zw&action_type=CLICK"
                },
                "onsent": {
                    "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD01ZWRhNWI1YjQweXJ4ODRheWI0M3NoM25wbzVxdTgxcHJxM3Zic2hkaXM0ejloeHMmZ2lmX2lkPWVydVZNelhsYjcwb28mY3Q9Zw&action_type=SENT"
                }
            },
            "alt_text": "Celebrity gif. Mike Tyson slowly turns his head and looks straight at us. A smile crosses his faces and he nods lightly. ",
            "is_low_contrast": false
        },
        {
            "type": "gif",
            "id": "kWcEOHhVTKo30Yfw1h",
            "url": "https://giphy.com/gifs/kWcEOHhVTKo30Yfw1h",
            "slug": "kWcEOHhVTKo30Yfw1h",
            "bitly_gif_url": "https://gph.is/g/4Mlv9wB",
            "bitly_url": "https://gph.is/g/4Mlv9wB",
            "embed_url": "https://giphy.com/embed/kWcEOHhVTKo30Yfw1h",
            "username": "enayatperak",
            "source": "",
            "title": "Dog Smile GIF",
            "rating": "g",
            "content_url": "",
            "source_tld": "",
            "source_post_url": "",
            "is_sticker": 0,
            "import_datetime": "2025-09-24 07:11:38",
            "trending_datetime": "0000-00-00 00:00:00",
            "images": {
                "original": {
                    "height": "400",
                    "width": "480",
                    "size": "2199992",
                    "url": "https://media4.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/kWcEOHhVTKo30Yfw1h/giphy.gif",
                    "mp4_size": "209183",
                    "mp4": "https://media4.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/kWcEOHhVTKo30Yfw1h/giphy.mp4",
                    "webp_size": "447172",
                    "webp": "https://media4.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/kWcEOHhVTKo30Yfw1h/giphy.webp",
                    "frames": "45",
                    "hash": "f46229ee6561c0b05cada7a35ea2d5cd"
                },
                "fixed_height": {
                    "height": "200",
                    "width": "240",
                    "size": "607900",
                    "url": "https://media4.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/kWcEOHhVTKo30Yfw1h/200.gif",
                    "mp4_size": "73874",
                    "mp4": "https://media4.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/kWcEOHhVTKo30Yfw1h/200.mp4",
                    "webp_size": "189022",
                    "webp": "https://media4.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/kWcEOHhVTKo30Yfw1h/200.webp"
                },
                "fixed_height_downsampled": {
                    "height": "200",
                    "width": "240",
                    "size": "79066",
                    "url": "https://media4.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/kWcEOHhVTKo30Yfw1h/200_d.gif",
                    "webp_size": "44084",
                    "webp": "https://media4.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/kWcEOHhVTKo30Yfw1h/200_d.webp"
                },
                "fixed_height_small": {
                    "height": "100",
                    "width": "120",
                    "size": "221670",
                    "url": "https://media4.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/kWcEOHhVTKo30Yfw1h/100.gif",
                    "mp4_size": "29481",
                    "mp4": "https://media4.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/kWcEOHhVTKo30Yfw1h/100.mp4",
                    "webp_size": "65438",
                    "webp": "https://media4.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/kWcEOHhVTKo30Yfw1h/100.webp"
                },
                "fixed_width": {
                    "height": "166",
                    "width": "200",
                    "size": "490724",
                    "url": "https://media4.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/kWcEOHhVTKo30Yfw1h/200w.gif",
                    "mp4_size": "57593",
                    "mp4": "https://media4.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/kWcEOHhVTKo30Yfw1h/200w.mp4",
                    "webp_size": "124214",
                    "webp": "https://media4.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/kWcEOHhVTKo30Yfw1h/200w.webp"
                },
                "fixed_width_downsampled": {
                    "height": "166",
                    "width": "200",
                    "size": "64859",
                    "url": "https://media4.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/kWcEOHhVTKo30Yfw1h/200w_d.gif",
                    "webp_size": "34692",
                    "webp": "https://media4.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/kWcEOHhVTKo30Yfw1h/200w_d.webp"
                },
                "fixed_width_small": {
                    "height": "84",
                    "width": "100",
                    "size": "169053",
                    "url": "https://media4.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/kWcEOHhVTKo30Yfw1h/100w.gif",
                    "mp4_size": "24062",
                    "mp4": "https://media4.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/kWcEOHhVTKo30Yfw1h/100w.mp4",
                    "webp_size": "53890",
                    "webp": "https://media4.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/kWcEOHhVTKo30Yfw1h/100w.webp"
                }
            },
            "user": {
                "avatar_url": "https://media4.giphy.com/avatars/enayatperak/Lf5xXiarnIep.jpg",
                "banner_image": "",
                "banner_url": "",
                "profile_url": "https://giphy.com/channel/enayatperak/",
                "username": "enayatperak",
                "display_name": "Mr perak",
                "description": "Football GIF Creator ⚽️\r\nOriginal, non-commercial content\r\nMatch moments, reactions & edits\r\nCreator: MrPerak\r\nAll content complies with GIPHY Community Guidelines",
                "instagram_url": "https://instagram.com/Perak_1985",
                "website_url": "",
                "is_verified": false
            },
            "analytics_response_payload": "e=ZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD01ZWRhNWI1YjQweXJ4ODRheWI0M3NoM25wbzVxdTgxcHJxM3Zic2hkaXM0ejloeHMmZ2lmX2lkPWtXY0VPSGhWVEtvMzBZZncxaCZjdD1n",
            "analytics": {
                "onload": {
                    "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD01ZWRhNWI1YjQweXJ4ODRheWI0M3NoM25wbzVxdTgxcHJxM3Zic2hkaXM0ejloeHMmZ2lmX2lkPWtXY0VPSGhWVEtvMzBZZncxaCZjdD1n&action_type=SEEN"
                },
                "onclick": {
                    "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD01ZWRhNWI1YjQweXJ4ODRheWI0M3NoM25wbzVxdTgxcHJxM3Zic2hkaXM0ejloeHMmZ2lmX2lkPWtXY0VPSGhWVEtvMzBZZncxaCZjdD1n&action_type=CLICK"
                },
                "onsent": {
                    "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD01ZWRhNWI1YjQweXJ4ODRheWI0M3NoM25wbzVxdTgxcHJxM3Zic2hkaXM0ejloeHMmZ2lmX2lkPWtXY0VPSGhWVEtvMzBZZncxaCZjdD1n&action_type=SENT"
                }
            },
            "alt_text": "",
            "is_low_contrast": false
        },
        {
            "type": "gif",
            "id": "Q66ZEIpjEQddUOOKGW",
            "url": "https://giphy.com/gifs/adorable-child-pouce-leve-Q66ZEIpjEQddUOOKGW",
            "slug": "adorable-child-pouce-leve-Q66ZEIpjEQddUOOKGW",
            "bitly_gif_url": "https://gph.is/g/46nvx7w",
            "bitly_url": "https://gph.is/g/46nvx7w",
            "embed_url": "https://giphy.com/embed/Q66ZEIpjEQddUOOKGW",
            "username": "",
            "source": "",
            "title": "Happy I Like It GIF",
            "rating": "g",
            "content_url": "",
            "source_tld": "",
            "source_post_url": "",
            "is_sticker": 0,
            "import_datetime": "2019-11-04 13:41:31",
            "trending_datetime": "0000-00-00 00:00:00",
            "images": {
                "original": {
                    "height": "238",
                    "width": "358",
                    "size": "864880",
                    "url": "https://media1.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/Q66ZEIpjEQddUOOKGW/giphy.gif",
                    "mp4_size": "231162",
                    "mp4": "https://media1.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/Q66ZEIpjEQddUOOKGW/giphy.mp4",
                    "webp_size": "292378",
                    "webp": "https://media1.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/Q66ZEIpjEQddUOOKGW/giphy.webp",
                    "frames": "30",
                    "hash": "1d05205a9561bf28f7baee5e8b6ff608"
                },
                "fixed_height": {
                    "height": "200",
                    "width": "300",
                    "size": "478384",
                    "url": "https://media1.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/Q66ZEIpjEQddUOOKGW/200.gif",
                    "mp4_size": "109690",
                    "mp4": "https://media1.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/Q66ZEIpjEQddUOOKGW/200.mp4",
                    "webp_size": "170488",
                    "webp": "https://media1.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/Q66ZEIpjEQddUOOKGW/200.webp"
                },
                "fixed_height_downsampled": {
                    "height": "200",
                    "width": "300",
                    "size": "90098",
                    "url": "https://media1.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/Q66ZEIpjEQddUOOKGW/200_d.gif",
                    "webp_size": "57014",
                    "webp": "https://media1.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/Q66ZEIpjEQddUOOKGW/200_d.webp"
                },
                "fixed_height_small": {
                    "height": "100",
                    "width": "150",
                    "size": "159304",
                    "url": "https://media1.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/Q66ZEIpjEQddUOOKGW/100.gif",
                    "mp4_size": "27999",
                    "mp4": "https://media1.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/Q66ZEIpjEQddUOOKGW/100.mp4",
                    "webp_size": "51052",
                    "webp": "https://media1.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/Q66ZEIpjEQddUOOKGW/100.webp"
                },
                "fixed_width": {
                    "height": "132",
                    "width": "200",
                    "size": "266383",
                    "url": "https://media1.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/Q66ZEIpjEQddUOOKGW/200w.gif",
                    "mp4_size": "41756",
                    "mp4": "https://media1.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/Q66ZEIpjEQddUOOKGW/200w.mp4",
                    "webp_size": "73442",
                    "webp": "https://media1.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/Q66ZEIpjEQddUOOKGW/200w.webp"
                },
                "fixed_width_downsampled": {
                    "height": "132",
                    "width": "200",
                    "size": "49180",
                    "url": "https://media1.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/Q66ZEIpjEQddUOOKGW/200w_d.gif",
                    "webp_size": "26986",
                    "webp": "https://media1.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/Q66ZEIpjEQddUOOKGW/200w_d.webp"
                },
                "fixed_width_small": {
                    "height": "68",
                    "width": "100",
                    "size": "88765",
                    "url": "https://media1.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/Q66ZEIpjEQddUOOKGW/100w.gif",
                    "mp4_size": "16016",
                    "mp4": "https://media1.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/Q66ZEIpjEQddUOOKGW/100w.mp4",
                    "webp_size": "32406",
                    "webp": "https://media1.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/Q66ZEIpjEQddUOOKGW/100w.webp"
                }
            },
            "analytics_response_payload": "e=ZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD01ZWRhNWI1YjQweXJ4ODRheWI0M3NoM25wbzVxdTgxcHJxM3Zic2hkaXM0ejloeHMmZ2lmX2lkPVE2NlpFSXBqRVFkZFVPT0tHVyZjdD1n",
            "analytics": {
                "onload": {
                    "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD01ZWRhNWI1YjQweXJ4ODRheWI0M3NoM25wbzVxdTgxcHJxM3Zic2hkaXM0ejloeHMmZ2lmX2lkPVE2NlpFSXBqRVFkZFVPT0tHVyZjdD1n&action_type=SEEN"
                },
                "onclick": {
                    "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD01ZWRhNWI1YjQweXJ4ODRheWI0M3NoM25wbzVxdTgxcHJxM3Zic2hkaXM0ejloeHMmZ2lmX2lkPVE2NlpFSXBqRVFkZFVPT0tHVyZjdD1n&action_type=CLICK"
                },
                "onsent": {
                    "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD01ZWRhNWI1YjQweXJ4ODRheWI0M3NoM25wbzVxdTgxcHJxM3Zic2hkaXM0ejloeHMmZ2lmX2lkPVE2NlpFSXBqRVFkZFVPT0tHVyZjdD1n&action_type=SENT"
                }
            },
            "alt_text": "Video gif. A toddler grins wide, raising their hand and giving an exuberant thumbs up at us. Their nose krinkles under their big smile. ",
            "is_low_contrast": false
        },
        {
            "type": "gif",
            "id": "suqg0jRPpDMze",
            "url": "https://giphy.com/gifs/creepy-evil-suqg0jRPpDMze",
            "slug": "creepy-evil-suqg0jRPpDMze",
            "bitly_gif_url": "http://gph.is/1UzlOg9",
            "bitly_url": "http://gph.is/1UzlOg9",
            "embed_url": "https://giphy.com/embed/suqg0jRPpDMze",
            "username": "",
            "source": "",
            "title": "Evil Smile GIF",
            "rating": "g",
            "content_url": "",
            "source_tld": "",
            "source_post_url": "",
            "is_sticker": 0,
            "import_datetime": "2016-01-07 15:42:38",
            "trending_datetime": "0000-00-00 00:00:00",
            "images": {
                "original": {
                    "height": "253",
                    "width": "337",
                    "size": "977289",
                    "url": "https://media2.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/suqg0jRPpDMze/giphy.gif",
                    "mp4_size": "855891",
                    "mp4": "https://media2.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/suqg0jRPpDMze/giphy.mp4",
                    "webp_size": "1123526",
                    "webp": "https://media2.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/suqg0jRPpDMze/giphy.webp",
                    "frames": "54",
                    "hash": "2ec272e7db56a61c4bb2e3ca92eaca58"
                },
                "fixed_height": {
                    "height": "200",
                    "width": "266",
                    "size": "922096",
                    "url": "https://media2.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/suqg0jRPpDMze/200.gif",
                    "mp4_size": "360446",
                    "mp4": "https://media2.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/suqg0jRPpDMze/200.mp4",
                    "webp_size": "491478",
                    "webp": "https://media2.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/suqg0jRPpDMze/200.webp"
                },
                "fixed_height_downsampled": {
                    "height": "200",
                    "width": "266",
                    "size": "97869",
                    "url": "https://media2.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/suqg0jRPpDMze/200_d.gif",
                    "webp_size": "73064",
                    "webp": "https://media2.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/suqg0jRPpDMze/200_d.webp"
                },
                "fixed_height_small": {
                    "height": "100",
                    "width": "134",
                    "size": "298852",
                    "url": "https://media2.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/suqg0jRPpDMze/100.gif",
                    "mp4_size": "52107",
                    "mp4": "https://media2.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/suqg0jRPpDMze/100.mp4",
                    "webp_size": "123026",
                    "webp": "https://media2.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/suqg0jRPpDMze/100.webp"
                },
                "fixed_width": {
                    "height": "150",
                    "width": "200",
                    "size": "664373",
                    "url": "https://media2.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/suqg0jRPpDMze/200w.gif",
                    "mp4_size": "145626",
                    "mp4": "https://media2.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/suqg0jRPpDMze/200w.mp4",
                    "webp_size": "228646",
                    "webp": "https://media2.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/suqg0jRPpDMze/200w.webp"
                },
                "fixed_width_downsampled": {
                    "height": "150",
                    "width": "200",
                    "size": "70599",
                    "url": "https://media2.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/suqg0jRPpDMze/200w_d.gif",
                    "webp_size": "43394",
                    "webp": "https://media2.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/suqg0jRPpDMze/200w_d.webp"
                },
                "fixed_width_small": {
                    "height": "76",
                    "width": "100",
                    "size": "191726",
                    "url": "https://media2.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/suqg0jRPpDMze/100w.gif",
                    "mp4_size": "37294",
                    "mp4": "https://media2.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/suqg0jRPpDMze/100w.mp4",
                    "webp_size": "82396",
                    "webp": "https://media2.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/suqg0jRPpDMze/100w.webp"
                }
            },
            "analytics_response_payload": "e=ZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD01ZWRhNWI1YjQweXJ4ODRheWI0M3NoM25wbzVxdTgxcHJxM3Zic2hkaXM0ejloeHMmZ2lmX2lkPXN1cWcwalJQcERNemUmY3Q9Zw",
            "analytics": {
                "onload": {
                    "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD01ZWRhNWI1YjQweXJ4ODRheWI0M3NoM25wbzVxdTgxcHJxM3Zic2hkaXM0ejloeHMmZ2lmX2lkPXN1cWcwalJQcERNemUmY3Q9Zw&action_type=SEEN"
                },
                "onclick": {
                    "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD01ZWRhNWI1YjQweXJ4ODRheWI0M3NoM25wbzVxdTgxcHJxM3Zic2hkaXM0ejloeHMmZ2lmX2lkPXN1cWcwalJQcERNemUmY3Q9Zw&action_type=CLICK"
                },
                "onsent": {
                    "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD01ZWRhNWI1YjQweXJ4ODRheWI0M3NoM25wbzVxdTgxcHJxM3Zic2hkaXM0ejloeHMmZ2lmX2lkPXN1cWcwalJQcERNemUmY3Q9Zw&action_type=SENT"
                }
            },
            "alt_text": "",
            "is_low_contrast": false
        },
        {
            "type": "gif",
            "id": "Rpm7zINbHhG3YsXi7g",
            "url": "https://giphy.com/gifs/happy-face-emoji-Rpm7zINbHhG3YsXi7g",
            "slug": "happy-face-emoji-Rpm7zINbHhG3YsXi7g",
            "bitly_gif_url": "https://gph.is/g/4oMqDgD",
            "bitly_url": "https://gph.is/g/4oMqDgD",
            "embed_url": "https://giphy.com/embed/Rpm7zINbHhG3YsXi7g",
            "username": "graficanod_",
            "source": "",
            "title": "",
            "rating": "g",
            "content_url": "",
            "source_tld": "",
            "source_post_url": "",
            "is_sticker": 0,
            "import_datetime": "2020-09-28 01:06:24",
            "trending_datetime": "0000-00-00 00:00:00",
            "images": {
                "original": {
                    "height": "466",
                    "width": "478",
                    "size": "28001",
                    "url": "https://media4.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/Rpm7zINbHhG3YsXi7g/giphy.gif",
                    "mp4_size": "15638",
                    "mp4": "https://media4.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/Rpm7zINbHhG3YsXi7g/giphy.mp4",
                    "webp_size": "18618",
                    "webp": "https://media4.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/Rpm7zINbHhG3YsXi7g/giphy.webp",
                    "frames": "6",
                    "hash": "aaa803a9c77010ef04edb9801ffe7289"
                },
                "fixed_height": {
                    "height": "200",
                    "width": "205",
                    "size": "8587",
                    "url": "https://media4.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/Rpm7zINbHhG3YsXi7g/200.gif",
                    "mp4_size": "7174",
                    "mp4": "https://media4.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/Rpm7zINbHhG3YsXi7g/200.mp4",
                    "webp_size": "8818",
                    "webp": "https://media4.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/Rpm7zINbHhG3YsXi7g/200.webp"
                },
                "fixed_height_downsampled": {
                    "height": "200",
                    "width": "205",
                    "size": "5424",
                    "url": "https://media4.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/Rpm7zINbHhG3YsXi7g/200_d.gif",
                    "webp_size": "7236",
                    "webp": "https://media4.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/Rpm7zINbHhG3YsXi7g/200_d.webp"
                },
                "fixed_height_small": {
                    "height": "100",
                    "width": "103",
                    "size": "4802",
                    "url": "https://media4.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/Rpm7zINbHhG3YsXi7g/100.gif",
                    "mp4_size": "4285",
                    "mp4": "https://media4.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/Rpm7zINbHhG3YsXi7g/100.mp4",
                    "webp_size": "4058",
                    "webp": "https://media4.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/Rpm7zINbHhG3YsXi7g/100.webp"
                },
                "fixed_width": {
                    "height": "195",
                    "width": "200",
                    "size": "8180",
                    "url": "https://media4.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/Rpm7zINbHhG3YsXi7g/200w.gif",
                    "mp4_size": "7088",
                    "mp4": "https://media4.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/Rpm7zINbHhG3YsXi7g/200w.mp4",
                    "webp_size": "8492",
                    "webp": "https://media4.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/Rpm7zINbHhG3YsXi7g/200w.webp"
                },
                "fixed_width_downsampled": {
                    "height": "195",
                    "width": "200",
                    "size": "5039",
                    "url": "https://media4.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/Rpm7zINbHhG3YsXi7g/200w_d.gif",
                    "webp_size": "8160",
                    "webp": "https://media4.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/Rpm7zINbHhG3YsXi7g/200w_d.webp"
                },
                "fixed_width_small": {
                    "height": "98",
                    "width": "100",
                    "size": "4243",
                    "url": "https://media4.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/Rpm7zINbHhG3YsXi7g/100w.gif",
                    "mp4_size": "4306",
                    "mp4": "https://media4.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/Rpm7zINbHhG3YsXi7g/100w.mp4",
                    "webp_size": "3588",
                    "webp": "https://media4.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/Rpm7zINbHhG3YsXi7g/100w.webp"
                }
            },
            "user": {
                "avatar_url": "https://media4.giphy.com/avatars/graficanod_/nJ2ynjdHE47w.jpg",
                "banner_image": "",
                "banner_url": "",
                "profile_url": "https://giphy.com/channel/graficanod_/",
                "username": "graficanod_",
                "display_name": "graficanod",
                "description": "Hola a todos! Soy Belu, diseñadora gráfica y amo crear contenido para redes sociales!",
                "instagram_url": "https://instagram.com/graficanod",
                "website_url": "http://giphy.com/channel/graficanod_",
                "is_verified": false
            },
            "analytics_response_payload": "e=ZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD01ZWRhNWI1YjQweXJ4ODRheWI0M3NoM25wbzVxdTgxcHJxM3Zic2hkaXM0ejloeHMmZ2lmX2lkPVJwbTd6SU5iSGhHM1lzWGk3ZyZjdD1n",
            "analytics": {
                "onload": {
                    "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD01ZWRhNWI1YjQweXJ4ODRheWI0M3NoM25wbzVxdTgxcHJxM3Zic2hkaXM0ejloeHMmZ2lmX2lkPVJwbTd6SU5iSGhHM1lzWGk3ZyZjdD1n&action_type=SEEN"
                },
                "onclick": {
                    "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD01ZWRhNWI1YjQweXJ4ODRheWI0M3NoM25wbzVxdTgxcHJxM3Zic2hkaXM0ejloeHMmZ2lmX2lkPVJwbTd6SU5iSGhHM1lzWGk3ZyZjdD1n&action_type=CLICK"
                },
                "onsent": {
                    "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD01ZWRhNWI1YjQweXJ4ODRheWI0M3NoM25wbzVxdTgxcHJxM3Zic2hkaXM0ejloeHMmZ2lmX2lkPVJwbTd6SU5iSGhHM1lzWGk3ZyZjdD1n&action_type=SENT"
                }
            },
            "alt_text": "",
            "is_low_contrast": false
        },
        {
            "type": "gif",
            "id": "XOnESAVcEOgiRC986y",
            "url": "https://giphy.com/gifs/smile-smirk-dog-XOnESAVcEOgiRC986y",
            "slug": "smile-smirk-dog-XOnESAVcEOgiRC986y",
            "bitly_gif_url": "https://gph.is/g/4bgAOvn",
            "bitly_url": "https://gph.is/g/4bgAOvn",
            "embed_url": "https://giphy.com/embed/XOnESAVcEOgiRC986y",
            "username": "noxarilty",
            "source": "",
            "title": "Dog Smile GIF",
            "rating": "g",
            "content_url": "",
            "source_tld": "",
            "source_post_url": "",
            "is_sticker": 0,
            "import_datetime": "2026-01-28 23:35:58",
            "trending_datetime": "0000-00-00 00:00:00",
            "images": {
                "original": {
                    "height": "480",
                    "width": "480",
                    "size": "1398290",
                    "url": "https://media4.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/XOnESAVcEOgiRC986y/giphy.gif",
                    "mp4_size": "92889",
                    "mp4": "https://media4.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/XOnESAVcEOgiRC986y/giphy.mp4",
                    "webp_size": "78968",
                    "webp": "https://media4.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/XOnESAVcEOgiRC986y/giphy.webp",
                    "frames": "26",
                    "hash": "a4b9df11c900bb9722ae21b466386966"
                },
                "fixed_height": {
                    "height": "200",
                    "width": "200",
                    "size": "225070",
                    "url": "https://media4.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/XOnESAVcEOgiRC986y/200.gif",
                    "mp4_size": "20461",
                    "mp4": "https://media4.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/XOnESAVcEOgiRC986y/200.mp4",
                    "webp_size": "21472",
                    "webp": "https://media4.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/XOnESAVcEOgiRC986y/200.webp"
                },
                "fixed_height_downsampled": {
                    "height": "200",
                    "width": "200",
                    "size": "46244",
                    "url": "https://media4.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/XOnESAVcEOgiRC986y/200_d.gif",
                    "webp_size": "44452",
                    "webp": "https://media4.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/XOnESAVcEOgiRC986y/200_d.webp"
                },
                "fixed_height_small": {
                    "height": "100",
                    "width": "100",
                    "size": "38176",
                    "url": "https://media4.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/XOnESAVcEOgiRC986y/100.gif",
                    "mp4_size": "7423",
                    "mp4": "https://media4.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/XOnESAVcEOgiRC986y/100.mp4",
                    "webp_size": "2364",
                    "webp": "https://media4.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/XOnESAVcEOgiRC986y/100.webp"
                },
                "fixed_width": {
                    "height": "200",
                    "width": "200",
                    "size": "225070",
                    "url": "https://media4.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/XOnESAVcEOgiRC986y/200w.gif",
                    "mp4_size": "20461",
                    "mp4": "https://media4.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/XOnESAVcEOgiRC986y/200w.mp4",
                    "webp_size": "8682",
                    "webp": "https://media4.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/XOnESAVcEOgiRC986y/200w.webp"
                },
                "fixed_width_downsampled": {
                    "height": "200",
                    "width": "200",
                    "size": "46244",
                    "url": "https://media4.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/XOnESAVcEOgiRC986y/200w_d.gif",
                    "webp_size": "44452",
                    "webp": "https://media4.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/XOnESAVcEOgiRC986y/200w_d.webp"
                },
                "fixed_width_small": {
                    "height": "100",
                    "width": "100",
                    "size": "38176",
                    "url": "https://media4.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/XOnESAVcEOgiRC986y/100w.gif",
                    "mp4_size": "7423",
                    "mp4": "https://media4.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/XOnESAVcEOgiRC986y/100w.mp4",
                    "webp_size": "2364",
                    "webp": "https://media4.giphy.com/media/v1.Y2lkPTVlZGE1YjViNDB5cng4NGF5YjQzc2gzbnBvNXF1ODFwcnEzdmJzaGRpczR6OWh4cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/XOnESAVcEOgiRC986y/100w.webp"
                }
            },
            "user": {
                "avatar_url": "https://media4.giphy.com/avatars/noxarilty/i0OMoOSEURXT.jpg",
                "banner_image": "",
                "banner_url": "",
                "profile_url": "https://giphy.com/channel/noxarilty/",
                "username": "noxarilty",
                "display_name": "NOXART",
                "description": "",
                "instagram_url": "https://instagram.com/noxarilty noxarilty",
                "website_url": "http://bit.ly/noxariltyserver",
                "is_verified": false
            },
            "analytics_response_payload": "e=ZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD01ZWRhNWI1YjQweXJ4ODRheWI0M3NoM25wbzVxdTgxcHJxM3Zic2hkaXM0ejloeHMmZ2lmX2lkPVhPbkVTQVZjRU9naVJDOTg2eSZjdD1n",
            "analytics": {
                "onload": {
                    "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD01ZWRhNWI1YjQweXJ4ODRheWI0M3NoM25wbzVxdTgxcHJxM3Zic2hkaXM0ejloeHMmZ2lmX2lkPVhPbkVTQVZjRU9naVJDOTg2eSZjdD1n&action_type=SEEN"
                },
                "onclick": {
                    "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD01ZWRhNWI1YjQweXJ4ODRheWI0M3NoM25wbzVxdTgxcHJxM3Zic2hkaXM0ejloeHMmZ2lmX2lkPVhPbkVTQVZjRU9naVJDOTg2eSZjdD1n&action_type=CLICK"
                },
                "onsent": {
                    "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD01ZWRhNWI1YjQweXJ4ODRheWI0M3NoM25wbzVxdTgxcHJxM3Zic2hkaXM0ejloeHMmZ2lmX2lkPVhPbkVTQVZjRU9naVJDOTg2eSZjdD1n&action_type=SENT"
                }
            },
            "alt_text": "",
            "is_low_contrast": false
        }
    ],
    "meta": {
        "status": 200,
        "msg": "OK",
        "response_id": "40yrx84ayb43sh3npo5qu81prq3vbshdis4z9hxs"
    },
    "pagination": {
        "total_count": 500,
        "count": 25,
        "offset": 0
    }
}

button.addEventListener("click", function () {
    // let images = getGiphys();
    console.log(fake_images);
    // loop through images array
    fake_images.data.forEach(function (gif) {
        gifContainer.innerHTML += `<img src="${gif.url}" class="col-3 mb-3">`;
    }
    );
    // for each URL, create an image element (<image>)
    // add it to the continer using:





    // **** leave this alone for now
    // answerButtons.forEach(function (btn) {
    //     btn.classList.remove("selected");
    // });

    // button.classList.add("selected");

    // answers[question.id] = button.dataset.answer;

    // console.log("You clicked:", button.dataset.answer);
});

