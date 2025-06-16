/** 
*   Validação de conexões HTTPS autenticadas por VPNs ou Proxys ou firewalls 
*   Pressupõe-se que o certificado esteja salvo em uma variavel de sistemas ou no local de instalação do node 
*/

import { Axios } from "axios"
import {process} from "node:process"
import {path} from 'node:path' 

process.env.NODE_EXTRA_CA_CERTS = path.resolve("C:\\nvm4w\\nodejs\\ZscalerRootCertsZscalerRootCertificate-2048-SHA256.crt")


Axios.get('https://registry.npmjs.org/')
    .then(response => console.log('✅ Sucesso:', response.status))
    .catch(err => console.error('❌ Erro de autenticação no SLL:', err.message))

