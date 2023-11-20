function init(){
    let words = [
        'Dahulu kala ada seekor kelinci yang memiliki kaki kuat sehingga larinya bisa sangat cepat. Karena kemampuan larinya yang sangat cepat ia pun jadi kelinci yang congkak dan sombong. Suatu hari karena tidak suka dengan sifat sombong yang dimiliki si kelinci, seekor kura-kura pun menantang kelinci untuk lomba lari.', 
        'Padahal, kura-kura adalah hewan yang jalannya lambat karena kakinya kecil dan ia pun harus menggendong rumahnya kemanapun ia pergi. Kelinci yang sombong pun setuju untuk berlomba lari dengan kura-kura. Bagaimana bisa ia mengalahkanku dengan jalannya yang lambat begitu, pikir kelinci. Akhirnya mereka pun sepakat menentukan jalan yang akan digunakan untuk berlari.',
        'Perlombaan lari pun dimulai, banyak hewan yang penasaran ingin melihat hasil perlombaan unik tersebut, banyak juga yang mendukung kura-kura karena mereka juga tidak suka dengan sifat kelinci yang sombong. Si monyet pun ditunjuk untuk jadi wasitnya. Begitu lomba lari dimulai, kelinci pun langsung melesat jauh meninggalkan kura-kura.',
		'Karena merasa masih punya banyak waktu dan jarak yang cukup jauh, belum sampai garis finish si kelinci memutuskan untuk tidur siang dulu di pinggir jalan. Di sisi lain, kura-kura terus sekuat tenaga untuk berlari sampai ke garis finish dan kelinci pun tidak sadar kalau dirinya sudah disalip kura-kura karena keasikan tidur.',
		'Akhirnya kura-kura pun memenangkan perlombaan dan membuat kelinci kaget minta ampun. Kura-kura yang menang mendapat sorak sorai dari hewan yang lain sedangkan kelinci pulang dengan tertunduk malu.'
    ]

    const game          = document.getElementById('game')
      let input         = document.createElement("input")
      let word          = document.createElement("h2")
      let order         = 0
      let totalOrders   = words.length

    word.setAttribute("id", "word");
    game.appendChild(word);
    
    input.setAttribute("id", "input");
    game.appendChild(input);
    
    function showWord(theWord){
        word.innerHTML = theWord;
    }
    
    function clearClass(){
        word.removeAttribute("class");
    }

    function wrong(){
        clearClass()
        word.classList.add('wrong')
    }

    function correct(){
        clearClass()
        word.classList.add('correct')
    }

    input.addEventListener('keyup', e => {
        if(e.code == 'Enter'){
            input = document.getElementById('input')
            
            if(input.value == words[order]){
                input.value = ''
                order++
                clearClass()
                if(totalOrders == order){
                    correct()
                    showWord('Anda Hebat &#128077;')
                    input.remove();
                }else{
                    showWord(words[order])
                }
            }
            else{
                wrong()
            }   
        }
    })

    showWord(words[order]);
}

init()