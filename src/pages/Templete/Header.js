import React from 'react'
import MediaQuery from 'react-responsive'

import './styles.css'

export default function Header(){
   return(
      <>
         <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
         <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
         <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1, maximum-scale=1, user-scalable=no" />
         <header id="myHeader">
            <h1 className="float-l">
            
               <MediaQuery maxWidth={650}>
                  <img src={"https://www.eldorado.org.br/wp-content/uploads/2017/09/Logo-Eldorado-Color-60-min.png"} alt="Eldorado"/>
               </MediaQuery>

               <MediaQuery minWidth={650}>
                  <img id="image-white" src={"https://www.eldorado.org.br/wp-content/uploads/2017/08/Logo-Eldorado-PB-60-min.png"} alt="Eldorado"/>
               </MediaQuery>

            </h1>
            
            <input type="checkbox" id="control-nav" />
            <label for="control-nav" className="control-nav"></label>
            <label for="control-nav" className="control-nav-close"></label>

            <nav className="float-r">
               <ul className="list-auto">
                  <li>
                     <a name="links-header" href="#Chaves" title="O-Eldorado">O ELDORADO</a>
                  </li>
                  <li>
                     <a name="links-header" href="#Chiquinha" title="O-que-fazemos">O que fazemos</a>
                  </li>
                  <li>
                     <a name="links-header" href="#Seu-Madruga" title="Seu Madruga">Mercados</a>
                  </li>
                  <li>
                     <a name="links-header" href="#Quico" title="Quico">Carreiras</a>
                  </li>
                  <li>
                     <a name="links-header" href="#Quico" title="Quico">Noticias</a>
                  </li>
                  <li>
                     <a name="links-header" href="#Quico" title="Quico">Blog</a>
                  </li>
                  <li>
                     <a name="links-header" href="#Quico" title="Quico">Contato</a>
                  </li>
               </ul>
            </nav>
            
            <div className="nav-secondary">
               <ul className="list-auto-social">
                  <li><i id="search" className="fa fa-search"></i></li>
                  {/* <li><a href="www.facebook.com" className="fa fa-facebook"></a></li>
                  <li><a href="www.facebook.com" className="fa fa-linkedin"></a></li> */}
                  <li><img src="https://www.eldorado.org.br/wp-content/plugins/sitepress-multilingual-cms/res/flags/pt-br.png" alt="português"/></li>
                  <li><img src="https://www.eldorado.org.br/wp-content/uploads/flags/us.png" alt="Inglês"/></li>
               </ul>
            </div>
         </header>
      </>
   )
}