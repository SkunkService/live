async function goToLIVE(username) { try { document.body.innerHTML = `<iframe src="https://tiktok.com/@${username}/live" width="100%" height="100%"></iframe>`; console.log("LIVE Success."); } catch (error) { console.error("Error loading LIVE:", error); } } async function goToProfile(username) { try { document.body.innerHTML = `<iframe src="https://tiktok.com/@${username}" width="100%" height="100%"></iframe>`; console.log("TikTok Profile Success."); } catch (error) { console.error("Error loading Profile:", error); } } async function talkSkunkOAI() { try { document.body.innerHTML = `<iframe src="https://skunkplatform.netlify.app/ai" width="100%" height="100%"></iframe>`; console.log("SkunkOAI Success."); } catch (error) { console.error("Error loading SkunkOAI:", error); } } async function moduleImportJS(filePath) { try { const response = await fetch(filePath); if (!response.ok) throw new Error(`Failed to fetch file: ${response.statusText}`); const scriptContent = await response.text(); console.log("Script fetched successfully:", scriptContent); eval(scriptContent); return scriptContent; } catch (error) { console.error("Error fetching script:", error); } }
