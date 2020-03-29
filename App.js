import React, { Component } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phrase: "",
      img: require("./src/images/Biscoito_Sorte.png"),
      disabledBtn: false
    };

    this.breakCookie = this.breakCookie.bind(this);

    this.phraseToRead = [
      '"A maior de todas as torres começa no solo."',
      '"Demonstre amor e alegria em todas as oportunidades e verás que a paz nasce dentro de você."',
      '"A vida trará coisas boas se tiveres paciência."',
      '"Defeitos e virtudes são apenas dois lados da mesma moeda."',
      '"Não há que ser forte. Há que ser flexível."',
      '"A Gente todo dia arruma os cabelos, por que não o coração?"',
      '"Há três coisas que jamais voltam; a flecha lançada, a palavra dita e a oportunidade perdida."',
      '"A juventude não é uma época da vida, é um estado de espírito."',
      '"Podemos escolher o que semear, mas somos obrigados a colher o que plantamos."',
      '"Não importa o tamanho da montanha, ela não pode tapar o sol."',
      '"Quem quer colher rosas deve suportar os espinhos."',
      '"A adversidade é um espelho que reflete o verdadeiro eu."',
      '"O riso é a menor distância entre duas pessoas."',
      '"A sorte favorece a mente bem preparada."',
      '"Quem olha para fora sonha; quem olha para dentro acorda."',
      '"Todas as coisas são difíceis antes de se tornarem fáceis."',
      '"O insucesso é apenas uma oportunidade para recomeçar de novo com mais inteligência."',
      '"Coragem é a resistência ao medo, domínio do medo, e não a ausência do medo."',
      '"Inspiração vem dos outros. Motivação vem de dentro de nós."'
    ];
  }

  breakCookie() {
    const randomNumber = Math.floor(Math.random() * this.phraseToRead.length);

    this.setState({
      phrase: this.phraseToRead[randomNumber],
      img: require("./src/images/Biscoito_Sorte_Aberto.png"),
      disabledBtn: true
    });

    setTimeout(() => {
      this.setState({
        phrase: "",
        img: require("./src/images/Biscoito_Sorte.png"),
        disabledBtn: false
      });
    }, 5000);
  }

  render() {
    return (
      <LinearGradient
        colors={["rgba(252,190,96,1)", "transparent"]}
        style={{
          flex: 1
        }}
      >
        <View style={style.container}>
          <View style={style.imgArea}>
            <Image source={this.state.img} style={style.img} />
          </View>
          <Text style={style.textPhrase}>{this.state.phrase}</Text>

          <TouchableOpacity
            disabled={this.state.disabledBtn}
            style={this.state.disabledBtn ? style.btnDisabled : style.btn}
            onPress={this.breakCookie}
          >
            <View style={style.btnArea}>
              <Text style={style.btnText}>Abrir biscoito</Text>
            </View>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  imgArea: {
    width: 300,
    height: 300,
    justifyContent: "center",
    alignItems: "center"
  },
  img: {
    width: "90%",
    height: "90%"
  },
  textPhrase: {
    fontSize: 20,
    color: "#000",
    margin: 30,
    fontStyle: "italic",
    textAlign: "center"
  },
  btn: {
    width: 230,
    height: 50,
    borderWidth: 2,
    borderColor: "#dd7b22",
    borderRadius: 25,
    backgroundColor: "#dd7b22"
  },

  btnArea: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  btnText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff"
  },
  btnDisabled: {
    backgroundColor: "#e3e1e1",
    width: 230,
    height: 50,
    borderWidth: 2,
    borderColor: "#e3e1e1",
    borderRadius: 25
  }
});

export default App;
