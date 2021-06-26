import React, {useState}  from "react"
import {View, Text, TextInput, Dimensions} from "react-native"
import styles from './styles'
import ColorButton from "../login.screen/color.button"
import ClientLogoComponent from "../client-logo.component"
import DropDownPicker from 'react-native-dropdown-picker'
import config from "../../config/config.json"
import {useDispatch} from "react-redux";
import {setLogin} from '../../slices/session.slice'
import Toast from "react-native-toast-message"

DropDownPicker.setTheme('DARK')

const errorDecoration = {
    borderColor: 'red'
}


export default function RegistrationScreen(props) {
    const dispatch = useDispatch();
    const [nome, setNome]= useState("");
    const [email, setEmail]= useState();
    const [nascimento, setNascimento]= useState("");
    const [sexo, setSexo]= useState("");
    const [senha, setSenha]= useState();
    const [senha2, setSenha2]= useState();
    const [open, setOpen] = useState(false);
    const [sexoList, setSexoList] = useState([
        {label: 'Masculino', value: "0", selectable: true},
        {label: 'Feminino', value: "1", selectable: true}
    ])

    function isValidEmail() {
        return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)
    }

    function nascimentoValido() {
        if (/^[0-9]{2}\/[0-9]{2}\/[0-9]{2,4}$/.test(nascimento)) {
            const nums = nascimento.split('/')
            if (nums.length === 3) {
                const data = new Date(`${nums[2]}/${nums[1]}/${nums[0]}`)
                return data && data.getDate() === +nums[0] &&
                    data.getMonth() + 1 === +nums[1] &&
                    data.getFullYear() === +nums[2]
            }
        }
        return nascimento === "";
    }

    const senha2OnError = senha === senha2 ? {} : errorDecoration
    const emailInvalido = isValidEmail() ? {} : errorDecoration
    const nomeOnError = nome.length > 3  ? {} : errorDecoration
    const nascimentoOnError = nascimentoValido() ? {} : errorDecoration


    function updateNascimento(data) {
        const nasc = data.trim()
        if (nasc == "" || (/^(([0-9]{1,2}\/[0-9]{1,2}\/[0-9]{1,4})|([0-9]{1,2}\/[0-9]{1,2}\/?)|([0-9]{1,2})\/?)$/g).test(nasc)) {
            setNascimento(nasc)
        }
    }

    const outrosDropDown = {width: Dimensions.get("screen").width - 75, alignSelf: 'center'}
    if (open) {
        outrosDropDown.minHeight = 140
    }


    function cadastrarUsuario() {
        fetch( `${config.server}/usuarios`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                nome,
                email,
                senha,
                nascimento,
                sexo: +sexo,
                idioma: "ptBR"
            })
        } )
        .then(ret => {
            if (ret.status === 200) {
                return ret.json()
            }
        })
        .then(ret => {
            if (ret) {
                dispatch(setLogin(ret.jwt))
            }
        })
        .catch(err => Toast.show({text1: 'Não foi possível gravar os dados'}) )
    }
    return (
        <View style={styles.screen}>
            <ClientLogoComponent/>
            <TextInput style={{...styles.inputs, ...nomeOnError}} placeholderTextColor='lightgray' placeholder="Nome" value={nome}
                       onChangeText={(text) => setNome(text)}/>
            <TextInput style={{...styles.inputs, ...emailInvalido}} placeholderTextColor='lightgray' placeholder="Email" value={email}
                       onChangeText={text => setEmail(text)}/>
            <TextInput style={{...styles.inputs, ...nascimentoOnError}} placeholderTextColor='lightgray' placeholder="Data Nascimento"
                       value={nascimento} onChangeText={updateNascimento}/>
            <View style={outrosDropDown}>
                <DropDownPicker style={styles.dropdown} containerStyle={styles.dropdown_container}
                                labelStyle={styles.dropdown_label} textStyle={styles.dropdown_text}
                                open={open}
                                value={sexo}
                                items={sexoList}
                                setOpen={setOpen}
                                setValue={setSexo}
                                setItems={setSexoList}
                                placeholder={"Sexo"}
                />
            </View>
            <TextInput style={styles.inputs} placeholderTextColor='lightgray' placeholder="Senha" value={senha}
                       secureTextEntry={true} onChangeText={(text) => setSenha(text)}/>
            <TextInput style={{...styles.inputs, ...senha2OnError} } placeholderTextColor='lightgray' placeholder="Senha" value={senha2}
                       secureTextEntry={true} onChangeText={(text) => setSenha2(text)}/>
            <ColorButton style={styles.btn} internalStyle={styles.btn_interno}
                         onPress={cadastrarUsuario} text="Cadastrar"/>
        </View>
    );
};
