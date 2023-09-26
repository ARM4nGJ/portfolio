window.onload = () => {

    var level_time;

    var level1 = document.getElementById("l1");
    var level2 = document.getElementById("l2");
    var level3 = document.getElementById("l3");

    document.getElementById("btn").addEventListener("click", () => {



        if (level1.checked == true) {
            level_time = 2000;
        }

        else if (level2.checked == true) {
            level_time = 1300;
        }


        else if (level3.checked == true) {
            level_time = 500;
        }

        document.getElementById("menu").style.display = "none";

        game_start();

    });



    document.getElementById("btn1").addEventListener("click", () => {
        location.reload();
    });



    function game_start() {
        var ch = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        var losscount = 1;


        var timer = setInterval(() => {
            var min = 0;
            var max = 80;
            var posX = Math.floor(Math.random() * (max - min) + min);
            var sp = document.createElement("span");
            sp.className = "bubble";








            var min1 = 0;
            var max1 = ch.length;
            var ch1 = Math.floor(Math.random() * (max1 + min1) - min1);
            sp.innerHTML = ch[ch1];
            sp.id = ch[ch1];
            sp.style.left = posX + "%";
            document.getElementById("bd").appendChild(sp);

            setTimeout(() => {
                document.getElementById("bd").removeChild(sp);
                document.getElementById("lbl2").innerHTML = losscount;
                var Box1 = document.querySelectorAll(".box>.box1");

                Box1[losscount - 1].classList.add("box-red");

                console.log(Box1);
                losscount++;


                if (losscount == 6) {
                    document.getElementById("game_over").style.display = "flex";
                    var val1 = document.getElementById("lbl").innerHTML;
                    var val2 = document.getElementById("lbl2").innerHTML;
                    document.getElementById("total_bubbles").innerHTML = parseInt(val1) + parseInt(val2);
                    document.getElementById("score").innerHTML = val1;
                    document.getElementById("loss").innerHTML = val2;
                    clearInterval(timer); 0
                    document.getElementById("bd").setAttribute("id", "bd1");
                }

            }, 5000);

        }, level_time);

        var count = 0;
        var key = null
        document.getElementById("bd").addEventListener("keyup", () => {
            key = event.keyCode;
            var res = String.fromCharCode(key);
            var e = document.getElementById(res);
            var sp_code = e.innerHTML.charCodeAt(0);
            if (sp_code == key) {

                count++;
                e.classList.toggle("bubble-dis1");
                document.getElementById("bd").removeChild(e);
                document.getElementById("lbl").innerHTML = count;

            }
        });


    }



}











