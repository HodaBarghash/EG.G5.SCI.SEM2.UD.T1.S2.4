function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6CsmrP0tgk3":
        Script1();
        break;
      case "5prHewKJQX8":
        Script2();
        break;
  }
}

function Script1()
{
  const url="https://script.google.com/macros/s/AKfycbwypTBocJh1EeenZD7psRGf0_glrgriA550H8AWENVxAMwVzCetQmd_pOLgDmukuqHMVA/exec"

var player=GetPlayer()

fetch(url,{
	method:"POST",
	mode: 'no-cors',
	cache:'no-cache',
	headers: {'Content-Type': 'application/json'},
	redirect:'follow',
	body: JSON.stringify({q1attempts:player.GetVar("q1attempts"),q1answeredcorrect:player.GetVar("q1answeredcorrect")})
	}
	)
}

function Script2()
{
  const url="https://script.google.com/macros/s/AKfycbwypTBocJh1EeenZD7psRGf0_glrgriA550H8AWENVxAMwVzCetQmd_pOLgDmukuqHMVA/exec"

var player=GetPlayer()

fetch(url,{
	method:"POST",
	mode: 'no-cors',
	cache:'no-cache',
	headers: {'Content-Type': 'application/json'},
	redirect:'follow',
	body: JSON.stringify({q1attempts:player.GetVar("q1attempts"),q1answeredcorrect:player.GetVar("q1answeredcorrect")})
	}
	)
}

