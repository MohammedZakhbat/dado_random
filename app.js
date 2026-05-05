function tirarDado() {
      let numeroRandom = Math.floor(Math.random() * 6) + 1;
      document.getElementById("dado").src = "./img/Dice-" + numeroRandom + ".svg";;
    }