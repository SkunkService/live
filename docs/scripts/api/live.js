async function goToProfile(username) { try { document.title = `Profile - ${username}`; document.body.innerHTML = `<blockquote class="tiktok-embed" cite="https://www.tiktok.com/@${username}" style="max-width: 605px; min-width: 325px;"></blockquote><script async src="https://www.tiktok.com/embed.js"></script>`; console.log("TikTok Profile Success."); } catch (error) { console.error("Error loading Profile:", error); } } async function goToLIVE(username) { try { document.title = `LIVE - ${username}`; document.body.innerHTML = `<blockquote class="tiktok-embed" cite="https://www.tiktok.com/@${username}/live" style="max-width: 605px; min-width: 325px;"></blockquote><script async src="https://www.tiktok.com/embed.js"></script>`; console.log("Live Stream Success."); } catch (error) { console.error("Error loading Live Stream:", error); } } async function talkSkunkOAI() { try { document.title = "SkunkOAI"; document.body.innerHTML = `<iframe src="https://skunkplatform.netlify.app/ai" style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; border: none;"></iframe>`; console.log("SkunkOAI Success."); } catch (error) { console.error("Error loading SkunkOAI:", error); } } async function moduleImportJS(filePath) { try { const response = await fetch(filePath); if (!response.ok) throw new Error(`Failed to fetch file: ${response.statusText}`); const scriptContent = await response.text(); console.log("Script fetched successfully:", scriptContent); eval(scriptContent); return scriptContent; } catch (error) { console.error("Error fetching script:", error); } }
