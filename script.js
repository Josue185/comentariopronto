const btn = document.querySelectorAll('button')[0];
const btn1 = document.querySelectorAll('button')[1];
const btn2 = document.querySelectorAll('button')[2];
const btn3 = document.querySelectorAll('button')[3];
const btn4 = document.querySelectorAll('button')[4];

const botaoconvtrack = document.querySelector('#convtrack');
const resultado = document.querySelector('#resultado');
const date = new Date();


function button() {
  resultado.innerHTML = 'Após entrar em meet com o anunciante, fomos até a sua conta do Analytics e criamos uma nova propriedade do GA4, vinculamos com o google Ads e testamos no Real time, implementação realizada com sucesso.';
}

function converTrack() {
  resultado.innerHTML = 'Após entrar em meet com o anunciante, verificamos as suas conversões e após identificar suas necessidades, criamos suas tags por "Defina aqui o meio" testamos e como tudo correu bem o caso esta sendo implementado.';
}

function Enhanced() {
  resultado.innerHTML = 'Após entrar em meet com o anunciante, verificamos as conversões compativeis com a task de otimização, configuramos a otimização e testamos e como tudo ocorreu perfeitamente estou deixando em awaiting validation para poder encerrar o caso.';
}

function enhancedEcommerce() {
  resultado.innerHTML = 'Após entrar em meet com o anunciante, iniciamos a configuração do ecommerce em seu Analytics, testamos e todos os eventos relacionados a tarefa dispararam corretamente, agora estou colocando o caso para ser observado e tudo correndo bem o caso será implementado.';
}

function remarketing() {
  resultado.innerHTML = 'Após entrar em meet com o anunciante, iniciamos a configuração de seu remarketing dentro do Ads e depois criamos a sua tag por "GTM ou Site".';
}

btn.addEventListener('click', button)

btn1.addEventListener('click', converTrack)

btn2.addEventListener('click', Enhanced)

btn3.addEventListener('click', enhancedEcommerce)

btn4.addEventListener('click', remarketing)


async function copyResult() {
  try {
    const element = document.querySelector('#resultado');
    const textToCopy = element.textContent;
    await navigator.clipboard.writeText(textToCopy);
    console.log('Texto copiado com sucesso!');
  } catch (err) {
    console.error('Erro ao copiar o texto: ', err);
  }
}






