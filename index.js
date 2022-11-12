// Register service worker to control making site work offline

if ("serviceWorker" in navigator) {
	navigator.serviceWorker.register("sw.js").then(function () {
		console.log("Service Worker Registered");
	});
}

// Code to handle install prompt on desktop

let deferredPrompt;
const addBtn = document.querySelector(".add-button");
addBtn.style.display = "none";
document.querySelector("#add-cache-button").addEventListener("click", () => {
	caches.open("video-store").then(function (cache) {
		return cache.addAll([
			'/aboutUs/AboutUs0.mp3',
			'/aboutUs/AboutUs1.mp3',
			'/aboutUs/snr.png',
			'/assets/audio/Tap1.wav',
			'/assets/audio/Tap2.wav',
			'/assets/audio/Tap3.wav',
			'/assets/audio/Tap4.wav',
			'/assets/audio/Tap5.wav',
			'/assets/audio/Tap6.wav',
			'/assets/audio/Tap7.wav',
			'/assets/fonts',
			'/assets/fonts/Source Han Sans & Saira Hybrid-Regular.ttf',
			'/assets/fonts/Exo-Regular.otf',
			'/assets/images/chapterImages',
			'/assets/images/chapterImages/ouroVoros.webp',
			'/assets/images/chapterImages/SpasmodicSP.webp',
			'/assets/images/A15A.png',
			'/assets/images/app_icon_576x576.png',
			'/assets/images/app_icon.png',
			'/assets/images/B15B.png',
			'/assets/images/back.png',
			'/assets/images/backInResault.png',
			'/assets/images/Button_Left.png',
			'/assets/images/Button_Right.png',
			'/assets/images/C15C.png',
			'/assets/images/F15F.png',
			'/assets/images/hitKeys.sketch',
			'/assets/images/InitialBackground.png',
			'/assets/images/InitialBackground.webp',
			'/assets/images/Introduction.png',
			'/assets/images/phi15phi.png',
			'/assets/images/Phigros.png',
			'/assets/images/Retry.png',
			'/assets/images/S15S.png',
			'/assets/images/setting.png',
			'/assets/images/sort.png',
			'/assets/images/V15FC.png',
			'/assets/images/V15V.png',
			'/chapterSelect/ChapterSelect0.mp3',
			'/LevelOver/LevelOver0.ogg',
			'/LevelOver/LevelOver1.ogg',
			'/LevelOver/LevelOver2.ogg',
			'/LevelOver/LevelOver3.ogg',
			'/settings/calibrate.ogg',
			'/tapToStart/TouchToStart0.ogg',
			'/whilePlaying/assets/oldui/clickRaw.png',
			'/whilePlaying/assets/oldui/Drag.png',
			'/whilePlaying/assets/oldui/Drag2HL.png',
			'/whilePlaying/assets/oldui/Flick.png',
			'/whilePlaying/assets/oldui/Flick2HL.png',
			'/whilePlaying/assets/oldui/HoldBody.png',
			'/whilePlaying/assets/oldui/HoldEnd.png',
			'/whilePlaying/assets/oldui/Tap.png',
			'/whilePlaying/assets/oldui/Tap2.png',
			'/whilePlaying/assets/oldui/Tap2HL.png',
			'/whilePlaying/assets/0.png',
			'/whilePlaying/assets/Back7918.png',
			'/whilePlaying/assets/clickRaw.png',
			'/whilePlaying/assets/createImageBitmap.js',
			'/whilePlaying/assets/demo.zip',
			'/whilePlaying/assets/Drag.png',
			'/whilePlaying/assets/DragHL.png',
			'/whilePlaying/assets/Flick.png',
			'/whilePlaying/assets/FlickHL.png',
			'/whilePlaying/assets/HitSong0.ogg',
			'/whilePlaying/assets/HitSong1.ogg',
			'/whilePlaying/assets/HitSong2.ogg',
			'/whilePlaying/assets/Hold.png',
			'/whilePlaying/assets/HoldEnd.png',
			'/whilePlaying/assets/HoldHead.png',
			'/whilePlaying/assets/HoldHeadHL.png',
			'/whilePlaying/assets/HoldHL.png',
			'/whilePlaying/assets/JudgeLine.png',
			'/whilePlaying/assets/mute.ogg',
			'/whilePlaying/assets/oggmented-bundle.js',
			'/whilePlaying/assets/Pause.png',
			'/whilePlaying/assets/ProgressBar.png',
			'/whilePlaying/assets/Resume.png',
			'/whilePlaying/assets/Retry.png',
			'/whilePlaying/assets/SongsNameBar.png',
			'/whilePlaying/assets/stackblur.min.js',
			'/whilePlaying/assets/stackblur.min.js.map',
			'/whilePlaying/assets/Tap.png',
			'/whilePlaying/assets/Tap2.png',
			'/whilePlaying/assets/TapHL.png',
			'/whilePlaying/index.html',
		]);
	});
});
window.addEventListener("beforeinstallprompt", (e) => {
	// Prevent Chrome 67 and earlier from automatically showing the prompt
	e.preventDefault();
	// Stash the event so it can be triggered later.
	deferredPrompt = e;
	// Update UI to notify the user they can add to home screen
	addBtn.style.display = "block";

	addBtn.addEventListener("click", (e) => {
		// hide our user interface that shows our A2HS button
		addBtn.style.display = "none";
		// Show the prompt
		deferredPrompt.prompt();
		// Wait for the user to respond to the prompt
		deferredPrompt.userChoice.then((choiceResult) => {
			if (choiceResult.outcome === "accepted") {
				console.log("User accepted the A2HS prompt");
			} else {
				console.log("User dismissed the A2HS prompt");
			}
			deferredPrompt = null;
		});
	});
});
