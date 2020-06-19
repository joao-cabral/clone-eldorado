import React from 'react'
import Header from '../Templete/Header'
import { Slide } from 'react-slideshow-image'
import MediaQuery from 'react-responsive'

import './styles.css'

function overlayOff(){
   var overlay = document.getElementById("overlay")
   overlay.classList.add("overlay-off")
   // console.log('overlay');
}

export default function Home(){
   const slideImages = [
      {
         url:'https://www.eldorado.org.br/wp-content/uploads/2018/08/201707_Eldorado_aereas_012-site-min-1.jpg',
         text: 'Combinamos novas tecnologias para desenhar soluções únicas em diferentes mercados',
         style: 'text-float-left'
      },
      {
         url: 'https://www.eldorado.org.br/wp-content/uploads/2017/09/Eldorado-Home_Filtro_Startups-min-1.png',
         text: 'Contamos com um ambiente inovador para desenvolvimento de statups, auxiliando na transformação de ideias em negócios',
         style: 'text-float-left'

      },
      {
         url: 'https://www.eldorado.org.br/wp-content/uploads/2017/09/Eldorado-Home-_Filtro_Experience-min-1.png',
         text: 'Possuímos uma gestão altamente qualificada e processo certificados pelas principais normas internacionais',
         style: 'text-float-right'

      }
      
   ]

   const slideNotices = [
      {
         url: 'https://www.eldorado.org.br/wp-content/uploads/2020/06/20528_ProgramaMCTICIA2_Blog_-310x210.png',
         text: 'Baita Aceleradora, Embrapa e Instituto ELDORADO vão apoiar soluções de impacto em Inteligência Artificial'
      },
      {
         url: 'https://www.eldorado.org.br/wp-content/uploads/2020/06/image-1-2-e1591390250755-310x210.png',
         text: 'Em parceria com o ELDORADO, Motorola doa solução para acompanhamento de pacientes com Covid-19 para o HC da Unicamp'
      },
      {
         url:'https://www.eldorado.org.br/wp-content/uploads/2020/05/image-1-310x210.png',
         text: 'Projeto inovador vai ampliar a capacidade produtiva de respiradores para o SUS'
      },
      {
         url:'https://www.eldorado.org.br/wp-content/uploads/2020/04/0B2A2465-310x210.jpg',
         text: 'ELDORADO disponibiliza testes EMC sem custo a eletromédicos desenvolvidos para tratamento da Covid-19"'
      },
      {
         url:'https://www.eldorado.org.br/wp-content/uploads/2020/04/banner-let-310x210.png',
         text: 'Instituto ELDORADO: como a inovação e a tecnologia trabalham na redução dos impactos de uma pandemia'
      }
   ]

   const slideProjects = [
      {
         url: 'https://www.eldorado.org.br/wp-content/uploads/2017/06/logo-ped-aneel-menor.png',
      },
      {
         url: 'https://www.eldorado.org.br/wp-content/uploads/2017/06/logo-finep-novo-1.png',
      },
      {
         url: 'https://www.eldorado.org.br/wp-content/uploads/2017/05/logo-embrapii.png',
      },
      {
         url: 'https://www.eldorado.org.br/wp-content/uploads/2017/05/logo-bndes.png',
      },
      {
         url: 'https://www.eldorado.org.br/wp-content/uploads/2017/06/logo-lei-informatica-menor.png',
      },
   ]

   const properties = {
      duration: 50000,
      transitionDuration: 500,
      infinite: true,
      indicators: false,
      arrows: true,
      pauseOnHover: true,
      // onChange: (oldIndex, newIndex) => {
      //   console.log(`slide transition from ${oldIndex} to ${newIndex}`);
      // }
   }

   return(
      <>
         <head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
         </head>

         <Header/>
         
         <div id="overlay">
            <button className="button-overlay" onClick={overlayOff}>X</button>
            <div className="overlay-information">
               <div className="overlay-content-title">
                  <h2>Desenvolvido por João Cabral</h2>
               </div>
               <div className="overlay-content-description">
                  <p>
                     Esse clone do site do Eldorado foi feito com ReactJS. Foi desenvolvido em uma semana nos horários vagos, então ele não tem todas as funcionalidades como o site oficial e também pode haver alguns Bugs.
                  </p>
                  <p>
                     O intuido de eu ter feito o clone do site é de desmonstrar meu conhecimento em React e me candidatar a vaga de Front-end. Caso você queira ver o codigo fonte é apenas entrar no meu github.
                  </p>
                  <p>
                     Também tenho experiência em desenvolvimento de apps usando React Native, Flutter e Kotlin. Espero que meu currículo atenda a vaga e possamos trabalhar juntos em breve.
                  </p>
                  <div className="box-button">
                     <button className="button-github">
                        <a href="https://github.com/joao-cabral" target="blank">Github</a>
                     </button>
                  </div>
               </div>
            </div>
         </div>

         <div className="slide-container">
            <Slide {...properties}>
               {slideImages.map(slideImage => (
                  <div className="each-slide">
                     <img src={slideImage.url} alt="place"/>
                     <h1 className={slideImage.style}>{slideImage.text}</h1>
                  </div>
               ))}
            </Slide>
         </div>

         <div className="what-we-do">
            <div className="title">
               <h2>O que fazemos</h2>
            </div>

            <div className="row">
               <div className="column">
                  <div className="card">
                     <h2 className="sub-title">Software</h2>
                     <p>Nossa equipe é altamente capacitada para desenhar e desenvolver soluções tecnológicas multiplataformas que atendam às demandas da sua empresa. Trabalhamos em sinergia, buscando a eficiência do seu negócio.</p>
                     <button>Veja mais</button>
                  </div>
               </div>

               <div className="column">
                  <div className="card">
                     <h2 className="sub-title">Hardware</h2>
                     <p>Plenamente capacitada, nossa equipe domina projetos digitais, comunicação sem fio, desenvolvimento de software embarcado, projetos mecânicos, dentre outras tecnologias de ponta na área de hardware.</p>
                     <button>Veja mais</button>
                  </div>
               </div>
                  
               <div className="column">
                  <div className="card">
                     <h2 className="sub-title">Educação</h2>
                     <p>Promovemos a educação, a capacitação e a inclusão por meio de cursos gratuitos na área de Tecnologia da Informação. Os alunos são desafiados a desenvolverem suas habilidades e a pensarem em soluções de TI.</p>
                     <button>Veja mais</button>
                  </div>
               </div>
                  
               <div className="column">
                  <div className="card">
                     <h2 className="sub-title">Testes e Ensaios</h2>
                     <p>Investimos na capacitação da nossa equipe e em tecnologia de ponta para a realização de um amplo espectro de testes seguindo padrões nacionais e internacionais de qualidade com base em normas de referência e do cliente.</p>
                     <button>Veja mais</button>
                  </div>
               </div>
            </div>
         </div>

         <div className="container-market">
            <div className="title-market">
               <h2>Mercado em que atuamos</h2>
               <p>Temos um extenso know-how, que nos permite desenvolver soluções únicas, aplicando diversas tecnologias de ponta em diferentes áreas de negócio.</p>
            </div>

            <div className="row">
               <div className="column">
                  <div className="card">
                     <div className="image-category">
                        <img src="https://www.eldorado.org.br/wp-content/uploads/2017/08/icone-agronegocio.png" alt=""/>
                        <h2 className="sub-title">Agronegócio</h2>
                     </div>
                     <div className="informations">
                        <p>Nossa equipe é altamente capacitada para desenhar e desenvolver soluções tecnológicas multiplataformas que atendam às demandas da sua empresa. Trabalhamos em sinergia, buscando a eficiência do seu negócio.</p>
                     <button>Veja mais</button>
                     </div>
                  </div>
               </div>

               <div className="column">
                  <div className="card">
                     <div className="image-category">
                        <img src="https://www.eldorado.org.br/wp-content/uploads/2017/08/icone-automotivo.png" alt=""/>
                        <h2 className="sub-title">Automotivo</h2>
                     </div>
                     <div className="informations">
                        <p>Plenamente capacitada, nossa equipe domina projetos digitais, comunicação sem fio, desenvolvimento de software embarcado, projetos mecânicos, dentre outras tecnologias de ponta na área de hardware.</p>
                        <button>Veja mais</button>
                     </div>
                  </div>
               </div>
                  
               <div className="column">
                  <div className="card">
                     <div className="image-category">
                        <img src="https://www.eldorado.org.br/wp-content/uploads/2017/05/icone-energia.png" alt=""/>
                        <h2 className="sub-title">Energia</h2>
                     </div>
                     <div className="informations">
                        <p>Promovemos a educação, a capacitação e a inclusão por meio de cursos gratuitos na área de Tecnologia da Informação. Os alunos são desafiados a desenvolverem suas habilidades e a pensarem em soluções de TI.</p>
                        <button>Veja mais</button>
                     </div>
                  </div>
               </div>
                  
               <div className="column">
                  <div className="card">
                     <div className="image-category">
                        <img src="https://www.eldorado.org.br/wp-content/uploads/2017/08/icone-gas-e-oil.png" alt=""/>
                        <h2 className="sub-title">Oil & Gas</h2>
                     </div>
                     <div className="informations">
                        <p>Investimos na capacitação da nossa equipe e em tecnologia de ponta para a realização de um amplo espectro de testes seguindo padrões nacionais e internacionais de qualidade com base em normas de referência e do cliente.</p>
                        <button>Ver mais</button>
                     </div>
                  </div>
               </div>

               <div className="column">
                  <div className="card">
                     <div className="image-category">
                        <img src="https://www.eldorado.org.br/wp-content/uploads/2017/05/icone-saude.png" alt=""/>
                        <h2 className="sub-title">Saúde</h2>
                     </div>
                     <div className="informations">
                        <p>Investimos na capacitação da nossa equipe e em tecnologia de ponta para a realização de um amplo espectro de testes seguindo padrões nacionais e internacionais de qualidade com base em normas de referência e do cliente.</p>
                        <button>Veja mais</button>
                     </div>
                  </div>
               </div>

               <div className="column">
                  <div className="card">
                     <div className="image-category">
                        <img src="https://www.eldorado.org.br/wp-content/uploads/2017/05/icone-ti-e-telecom.png" alt=""/>
                        <h2 className="sub-title">TI & Telecom</h2>
                     </div>
                     <div className="informations">
                        <p>Investimos na capacitação da nossa equipe e em tecnologia de ponta para a realização de um amplo espectro de testes seguindo padrões nacionais e internacionais de qualidade com base em normas de referência e do cliente.</p>
                        <button>Veja mais</button>
                     </div>
                  </div>
               </div>

               <div className="column">
                  <div className="card">
                     <div className="image-category">
                        <img src="https://www.eldorado.org.br/wp-content/uploads/2017/08/icone-varejo.png" alt=""/>
                        <h2 className="sub-title">Varejo</h2>
                     </div>
                     <div className="informations">
                        <p>Investimos na capacitação da nossa equipe e em tecnologia de ponta para a realização de um amplo espectro de testes seguindo padrões nacionais e internacionais de qualidade com base em normas de referência e do cliente.</p>
                        <button>Veja mais</button>
                     </div>
                  </div>
               </div>
            </div>
         </div>

         <div className="container-the-eldorado">
            <div className="title">
               <h2>O ELDORADO</h2>
            </div>

            <div className="row">
               <div className="column">
                  <div className="card">
                     <h2 className="sub-title">Quem somos</h2>
                     <p>Somos um dos maiores centros de P,D&I do país, referência em pesquisa, desenvolvimento e inovação nas áreas de Software, Hardware, sistemas, processos, ensaios e testes de produtos eletroeletrônicos, e em capacitação profissional nestas áreas. Com cerca de 800 colaboradores e grandes parcerias e projetos, combinamos uma gestão profissional com um excelente clima institucional.</p>
                  </div>
               </div>

               <div className="column">
                  <div className="card">
                     <h2 className="sub-title">Estado da arte</h2>
                     <p>Trabalhamos no mais alto nível de desenvolvimento. Utilizamos tecnologias de ponta combinadas para gerar soluções únicas em diferentes mercados. Temos o compromisso de implementar, manter e melhorar continuamente os nossos serviços e sistemas de gerenciamento. Além disso, temos diversos níveis de certificações internacionais para alinhar normas e procedimentos em escala global.</p>
                  </div>
               </div>
                  
               <div className="column">
                  <div className="card">
                     <h2 className="sub-title">Cultura de entrega</h2>
                     <p>Um dos nossos valores é o respeito ao compromisso. Buscamos, continuamente, cumprir nossos prazos e trabalhar de maneira ética, com excelência operacional. Aqui, todos se comprometem com a satisfação de nossos clientes e parceiros, e a cultura de entrega é valorizada e reconhecida. Todas as nossas entregas estão diretamente ligadas à produtividade de nossas equipes, que cumprem os prazos propostos.</p>
                  </div>
               </div>
                  
            </div>
         </div>

         <div className="container-notice">
            <div className="title">
               <h2>Notícias</h2>
               <p>Confira nossas últimas notícias sobre atuações, conquistas, projetos e participações em eventos.</p>
            </div>
            <div className="slide-container-notice">
               {slideNotices.map(slideNotice => (
                  <div className="each-slide-notice">
                     <img src={slideNotice.url} alt="Notice"/>
                     <div className="card-notice">
                        <span>{slideNotice.text}</span>
                     </div>
                  </div>
               ))}
            </div>
            <div id="button-notice">
               <button>Ver mais</button>
            </div>
         </div>

         <div className="container-newslatter">
            <div className="title">
               <h2>Cadastro newslatter</h2>
               <p>Receba notícias do ELDORADO e artigos sobre as tecnologias que trabalhamos!</p>
            </div>
            <div className="button">
               <button>Cadastre-se</button>
            </div>
         </div>

         <div className="container-projects">
            <div className="title">
               <h2>Atuamos em projetos</h2>
            </div>

            <MediaQuery minWidth={425}>
               <div className="slide-container-notice">
                  {slideProjects.map(slideProject => (
                     <div className="each-slide-notice">
                        <img src={slideProject.url} alt="Notice"/>
                     </div>
                  ))}
               </div>
            </MediaQuery>
            
            <MediaQuery maxWidth={424}>
               <div className="slide-container-projects">
                  <Slide {...properties}>
                     {slideProjects.map(slideProject => (
                        <div className="each-slide-projects">
                           <img src={slideProject.url} alt="Notice"/>
                        </div>
                     ))}
                  </Slide>
               </div>
            </MediaQuery>
            
         </div>
         
         <footer>
            <div className="container-footer">
               <div className="row-footer">
                  <div className="column">
                     <div className="card">
                        <h3 className="sub-title">O que fazemos</h3>
                        <ul>
                           <li><a href="#">Software</a></li>
                           <li><a href="#">Hardware</a></li>
                           <li><a href="#">Educação</a></li>
                           <li><a href="#">Teste e ensaios</a></li>
                        </ul>
                     </div>
                  </div>

                  <div className="column">
                     <div className="card">
                        <h3 className="sub-title">Mercados</h3>
                        <ul>
                           <li><a href="#">Agronegócio</a></li>
                           <li><a href="#">Automotivo</a></li>
                           <li><a href="#">Energia</a></li>
                           <li><a href="#">Mineração</a></li>
                           <li><a href="#">Saúde</a></li>
                           <li><a href="#">Varejo</a></li>
                        </ul>
                     </div>
                  </div>
                     
                  <div className="column">
                     <div className="card">
                        <h3 className="sub-title">O Eldorado</h3>
                        <ul>
                           <li><a href="#">Quem somos</a></li>
                           <li><a href="#">Leis de Incentivo</a></li>
                           <li><a href="#">Demonstrativos Financeiross</a></li>
                           <li><a href="#">Política do Sistema de Gestão</a></li>
                           <li><a href="#">Notícias</a></li>
                        </ul>
                     </div>
                  </div>
                  
                  <div className="column">
                     <div className="card">
                        <h3 className="sub-title">Unidades</h3>
                        <a href="www">Conheça nossas unidades</a>
                     </div>
                  </div>

                  <div className="column">
                     <div className="card">
                        <h3 className="sub-title">Nossos Perfis</h3>
                        <a href="www">Conheça nossas unidades</a>
                        {/* <a href="www">Conheça nossas unidades</a>
                        <a href="www">Conheça nossas unidades</a> */}
                     </div>
                  </div>
               </div>
            </div>
         
            <div className="box-footer">
               <p id="extra">institucional | Blog | Fale conosco</p>
               <p id="autor">2020 João da Silva Cabral</p>
            </div>
         </footer>
      </>
   )
}