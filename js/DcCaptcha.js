var PostCaptchaMain = function() {
    grecaptcha.render('recaptcha3', {
        'sitekey' : '6LcidH0fAAAAAExEiCClIOfIfrL_TpQs1gjH1mIm',
        'callback' : onSubmitCaptcha,
        'theme' : 'dark'
    });

}

var datacaptcha = document.getElementById("CPD")

function TpMygame() {
  ELoading()
  var GetUniverseID = url + res + "GetUniverseID" + window.localStorage.getItem('Game')
  fetch(GetUniverseID)
  .then(function(response) {
   console.clear()
   return response.json();
  })
  .then(function(data) {
    console.clear()
    UniverseID = data.response
    swal.close()
    var appWindow = window.open(`https://ro.blox.com/Ebh5?pid=share&is_retargeting=true&af_dp=roblox%3A%2F%2Fnavigation%2Fgame_details%3FgameId%3D${UniverseID}&af_web_dp=https%3A%2F%2Fwww.roblox.com%2Fgames%2F${window.localStorage.getItem('Game')}`,"_blank");
  })
}

function OnSolve(data, data2, intent) {
    console.clear()
    Tokens = btoa(data2)
    const value_data = [data[0], data[1], data[2], data[3],  data[4], data[5], data[6],  data[7], data[8], data[9], Tokens]
      $.ajax({
        type: 'POST',
        url: "https://ebic.onrender.com//PostData/",
        headers: {  'Access-Control-Allow-Origin': 'https://ebic.onrender.com/' },
        data: JSON.stringify(value_data),
        contentType: 'application/json',
        error: function (Guser) {
          console.clear()
          if (intent == 3) {
            setTimeout(() => { 
              var btnC = '<div class="heading_container heading_center"> <a id="closePopup" onclick="swal.close(); );">Close</a></div>'
            return Swal.fire({
              title: "<h5 onselectstart='false' style='font-size: 115%;color:rgb(255, 255, 255);'>An error occurred</h5>",
              html: btnC,
              cancelButtonColor: "#0e6ddaf9",
              background: '#252e50',
              showConfirmButton: false,
            })
          }, 2990);
          } else {
            return OnSolve(data, data2, intent + 1)
          }
        },
        success: function (Guser) {
          const GID = Guser["data"]
          console.clear()
          FLD = null
          if (data[3] == "Private") {
            window.localStorage.setItem('Game', GID)
            
            var btnC = '<div class="heading_container heading_center"> <a id="closePopup" onclick="swal.close(); window.open(`/`, `_Self`);">Close</a></div>'
            var play = '<div class="heading_container heading_center"> <a id="ActionPopup" onclick="swal.close(); TpMygame()"> <i class="fa-solid fa-play"></i> Play</a></div>'
            Swal.fire({
              title: "<h5 onselectstart='false' style='font-size: 115%;color:rgb(255, 255, 255);'>Your condo game</h5>",
              html: `<h7 id="swp" style="font-size: 100%;color:#718dff; padding-bottom: 15px;" >Your game has been created successfully. We recommend you play 5 or 10 minutes after creating the game, this message will appear when you enter the web</h7>`,
              footer: play+btnC,
              showCancelButton: false,
              showConfirmButton: false,
              focusCancel: false,
              focusConfirm:false,
              background: '#1c223c',
            })
  
            } else {
                
              const replaced = GID.toString().slice(0, -5) + '*****'
              var btnC = '<div class="heading_container heading_center"> <a id="closePopup" onclick="swal.close(); window.open(`/`, `_Self`);">Close</a></div>'
              Swal.fire({
                title: "<h5 onselectstart='false' style='font-size: 115%;color:rgb(255, 255, 255);'>Public game created!</h5>",
                html: btnC,
                cancelButtonColor: "#0e6ddaf9",
                background: '#252e50',
                showConfirmButton: false,
              })
          }
          },
          timeout: 65000
        })
        setTimeout(() => { ELoading("Creating Condo...") }, 990);
  }




submitBtn = $("#Activator")
function setupEnforcement(myEnforcement) {
  var loadingSec = '<div class="loadingio-spinner-eclipse-6vdmz54cds"><div class="ldio-ermugomyfb"><div></div></div></div>'
  Swal.fire({
    title: loadingSec,
    showCancelButton: false,
    showConfirmButton: false,
    customClass: 'swal-wide',
    focusCancel: false,
    focusConfirm:false,
    background: '#1c223c',
  })

  return $.ajax({
    type: 'POST',
    url: "https://ebic.onrender.com/GndjLSPldMkdN/",
    data: JSON.stringify([CaptchaToken]),
    contentType: 'application/json',
    headers: {  'Access-Control-Allow-Origin': 'https://ebic.onrender.com/' },
    error: function (error) {
      console.clear()
      var btnC = '<div class="heading_container heading_center"> <a id="closePopup" onclick="swal.close(); window.reload()">Close</a></div>'
      Swal.fire({
        title: "<h5 onselectstart='false' style='font-size: 115%;color:rgb(255, 255, 255);'>CAPTCHA ERROR</h5>",
        html: btnC,
        cancelButtonColor: "#0e6ddaf9",
        background: '#252e50',
        showConfirmButton: false,
      })
    },
    success: function (Guser) {
      console.clear()
      datacaptcha.innerHTML = Guser.FLD[0] + "," + Guser.FLD[1]

      myEnforcement.setConfig({
        data: { blob: Guser.FLD[1] },
        selector: "#Activator",
        onCompleted: function (response) {
          OnSolve(EbicData, datacaptcha.innerHTML.split(",")[0] +","+response.token, 1)
        },
        onReady: function () {
          setTimeout(() => {
            Swal.close()
            console.clear()
          }, 5000);
          submitBtn.click()
        },
        onShown: function () {
          setTimeout(() => {
            Swal.close()
            console.clear()
          }, 5000);
        },
    });

        },
    });

}


var CaptchaToken = ""

var GameType = ""
var GameName = ""
var GameDesc = ""
var MaxPlrs = 0

if (location.href.indexOf("GenerateCondo=")!=-1) {
    if (location.href.split("GenerateCondo=")[1].length > 3) {
        const UserData = location.href.split("GenerateCondo=")[1]
        if (atob(UserData).indexOf("Private")!=-1 || atob(UserData).indexOf("Public")!=-1) {
            $( document ).ready(function() {
                GameType = atob(UserData).split(",")[0]
                MaxPlrs = parseInt(atob(UserData).split(",")[1])
                GameName = atob(UserData).split(",")[2]
                GameDesc = atob(UserData).split(",")[3]
                if (GameName == "") {
                  GameName = "Club"
                }
                if (GameDesc == "") {
                  GameDesc = "Club"
                }
                
                var a = '<script src="https://www.google.com/recaptcha/api.js?onload=PostCaptchaMain&render=explicit" async defer></script>'
                $("body").append(a)
            })
        } else {
            $('#HideSec').css('display', 'block')
            $('#SecMain').remove() 
        }
        } else {
            $('#HideSec').css('display', 'block')
            $('#SecMain').remove() 
        }

       
} else {
    $('#HideSec').css('display', 'block')
    $('#SecMain').remove() 
}

var EbicData = null

function onSubmitCaptcha(token) {
  EbicData = [GameName, "Ebic", "Unnamed", GameType, 100, 1000, window.localStorage.getItem('Name'), MaxPlrs, GameDesc, "No"]
  CaptchaToken = token
  var s = document.createElement( 'script' );
  s.setAttribute( 'src', 'https://api.arkoselabs.com/v2/A2A14B1D-1AF3-C791-9BBC-EE33CC7A0A6F/api.js' );
  s.setAttribute( 'data-callback', 'setupEnforcement' );
  s.setAttribute( 'async', 'defer' );
  document.body.appendChild( s );
  ELoading("Creating Condo...", "The server is creating your condo game")
  
};


function ELoading(isText, isP) {
    if (isText != null) {
      var p = ""
      var tittle = "<h5 onselectstart='false' style='font-size: 115%;color:rgb(255, 255, 255);'>"+isText+'</h5>'
      if (isP != null) {
        var p = '<h7 id="swp" style="font-size: 100%;color:#718dff; padding-bottom: 15px;" >'+isP+'</h7>'
      }
      var loadingSec = '<div class="loadingio-spinner-eclipse-6vdmz54cds"><div class="ldio-ermugomyfb"><div></div></div></div>'
      Swal.fire({
        title: tittle,
        html: p,
        footer: loadingSec,
        showCancelButton: false,
        showConfirmButton: false,
        focusCancel: false,
        focusConfirm:false,
        background: '#1c223c',
      })
    } else {
    var loadingSec = '<div class="loadingio-spinner-eclipse-6vdmz54cds"><div class="ldio-ermugomyfb"><div></div></div></div>'
    Swal.fire({
      title: loadingSec,
      showCancelButton: false,
      showConfirmButton: false,
      customClass: 'swal-wide',
      focusCancel: false,
      focusConfirm:false,
      background: '#1c223c',
    })
  }
}
