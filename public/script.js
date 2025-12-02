async function testarAPI(){
  const resp = await fetch("/api/backend",{method:"POST"});
  const data = await resp.json();
  alert("API Funcionando! -> " + JSON.stringify(data));
}
testarAPI();
