import { useState } from "react"

export function Bank() {
    const [saldo, setSaldo] = useState(100)

    function deposita15() {
        setTimeout(() => {  //Função para simular uma CONCORRENCIA
            setSaldo((prevSaldo) => prevSaldo + 15)
        }, 3000)
    } 

    function sacar100() {
        setSaldo(saldo - 100)
    }

    return (
        <div>
            <button onClick={deposita15}>Deposito: R$ 15,00</button>
            <button onClick={sacar100}>Sacar: R$ 100,00</button>
            R$ {saldo}, 00
        </div>
    )
}