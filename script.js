// ===== DATA =====
const sites=[
{id:"mercado_born",name:"Mercado del la boqueria",date:"1840",
info:"El Mercado de La Boquería (Mercat de Sant Josep) es uno de los mercados más emblemáticos de Barcelona, ubicado en La Rambla. Con orígenes en el siglo XIII, cuenta con cientos de puestos que ofrecen productos frescos, tapas y especialidades locales, siendo un referente gastronómico y turístico de la ciudad.",
history:"Construido en su estructura actual a comienzos del siglo XX, con la emblemática cubierta metálica inaugurada en 1914, el Mercado de La Boquería es uno de los mercados más antiguos y representativos de Barcelona. Sus orígenes se remontan al siglo XIII como mercado al aire libre en La Rambla, y hoy reúne cientos de puestos de productos frescos y especialidades gastronómicas, consolidándose como un símbolo histórico y culinario de la ciudad.",
curiosidades:"El Mercado de La Boquería recibe su nombre de “boqueria”, palabra medieval relacionada con la venta de carne de cabra (“boc”), ya que en sus orígenes era un mercado donde se comercializaba principalmente este tipo de carne.",
imgs:["mercado_de_la_boqueria1.jpg","mercado_de_la_boqueria2.jpg","mercado_de_la_boqueria3.jpg"]},


{id:"canaletas",name:"Font de Canaletes",date:"1860",
info:"La famosa fuente situada al inicio de La Rambla. Según la tradición, quien bebe de ella volverá a Barcelona.",
history:"La fuente original data del siglo XIX y debe su nombre a las canalizaciones de agua que existían en la zona. En 1892 se instaló una fuente de hierro que fue sustituida por la actual en 1950.",
curiosidades:"Los aficionados del Barça celebran aquí sus títulos. Originalmente era un punto de venta de periódicos donde se comentaban las noticias.",
imgs:["canaletas1.jpg","canaletas2.jpg","canaletas3.jpg"]},


{id:"rambla",name:"Rambla de Barcelona",date:"Siglo XVIII",
info:"El paseo más emblemático de Barcelona, con 1.3 km desde Plaza Catalunya hasta el puerto. Lleno de artistas callejeros, puestos de flores y vida.",
history:"Originalmente era un torrente estacional llamado 'raml' (arena en árabe). En el siglo XVIII se urbanizó y se convirtió en paseo. A lo largo de los siglos se fueron construyendo edificios notables como el Palau de la Virreina, el Liceu y el Mercado de la Boqueria.",
curiosidades:"Federico García Lorca dijo que era 'la única calle del mundo que desearía que no se acabara nunca'. Tiene 5 tramos diferentes, cada uno con personalidad propia. El mosaico del suelo fue diseñado por Joan Miró.",
imgs:["rambla1.jpg","rambla2.jpg","rambla3.jpg"]},


{id:"catedral",name:"Catedral de Barcelona",date:"1298-1448",
info:"La Catedral de la Santa Creu i Santa Eulàlia es la catedral gótica de Barcelona. Su impresionante fachada y claustro con 13 ocas blancas son icónicas.",
history:"Se comenzó a construir en 1298 sobre una antigua catedral románica y una basílica paleocristiana. La construcción del edificio principal duró 150 años. La fachada actual se completó en 1890 siguiendo un diseño neogótico.",
curiosidades:"En el claustro viven 13 ocas blancas en honor a Santa Eulàlia, que según la tradición fue martirizada a los 13 años. La catedral tiene un huevo que baila sobre el chorro de una fuente durante la festividad del Corpus Christi.",
imgs:["catedral1.jpg","catedral2.jpg","catedral3.jpg"]},


{id:"plaza_catalunya",name:"Plaza Catalunya",date:"1927",
info:"El corazón de Barcelona que conecta el casco antiguo con el Eixample. Con 50,000 m², es el principal punto de encuentro y nudo de transportes de la ciudad.",
history:"Hasta mediados del siglo XIX era un espacio fuera de los límites de la muralla. Tras el derribo de las murallas, se fue urbanizando. La plaza actual fue diseñada para la Exposición Internacional de 1929 por Francesc Nebot y cuenta con esculturas de artistas destacados.",
curiosidades:"Cuenta con esculturas de artistas como Josep Clarà y Pablo Gargallo. Durante la Guerra Civil fue escenario de los combates de mayo de 1937. El edificio de El Corte Inglés ocupa el antiguo edificio de los almacenes El Siglo, que sufrió un espectacular incendio en 1932.",
imgs:["plaza_catalunya1.jpg","plaza_catalunya2.jpg","plaza_catalunya3.jpg"]},


{id:"arco_triunfo",name:"Arco del Triunfo",date:"1888",
info:"Construido como puerta de entrada a la Exposición Universal de 1888. De estilo neomudéjar, destaca por su ladrillo rojo y sus relieves escultóricos.",
history:"Diseñado por Josep Vilaseca como entrada principal de la Exposición Universal de 1888. A diferencia de otros arcos triunfales, no celebra una victoria militar sino el progreso y la modernidad. El paseo que lo precede, el Passeig Lluís Companys, lleva al Parc de la Ciutadella.",
curiosidades:"Mide casi 30 metros de alto. Sus frisos representan alegorías de la industria, el comercio y las artes. En la parte superior hay murciélagos esculpidos, símbolo de la Corona de Aragón. Es uno de los pocos arcos triunfales del mundo dedicados a la paz. Y hoy hacen una quedada los therians a las 18:30 (si ves uno pegale una patada).",
imgs:["arco_triunfo1.jpg","arco_triunfo2.jpg","arco_triunfo3.jpg"]},


{id:"parc_ciutadella",name:"Parc de la Ciutadella",date:"1881",
info:"El parque más céntrico y popular de Barcelona. Con su lago, fuente monumental, zoo e invernadero, es el pulmón verde de la ciudad.",
history:"Construido sobre los terrenos de la antigua fortaleza militar de la Ciutadella, demolida por el pueblo en 1869 como símbolo de opresión. Se diseñó para la Exposición Universal de 1888. Gaudí colaboró en el diseño de la Cascada monumental cuando era estudiante.",
curiosidades:"Gaudí participó en el diseño de la cascada monumental siendo aún estudiante. Alberga el Parlament de Catalunya. El mamut de piedra del parque es una de las esculturas más fotografiadas. Tiene un ejemplar de Taxodium que tiene más de 100 años.",
imgs:["parc_ciutadella1.jpg","parc_ciutadella2.jpg","parc_ciutadella3.jpg"]},


{id:"hotel_vela",name:"Hotel W (Hotel Vela)",date:"2009",
info:"El icónico edificio con forma de vela en la Barceloneta, diseñado por Ricardo Bofill. Con 99 metros de altura, se ha convertido en un símbolo del skyline marítimo de Barcelona.",
history:"Diseñado por el arquitecto Ricardo Bofill y inaugurado en 2009. Su construcción fue polémica por su proximidad al mar, ya que la ley de costas prohíbe construir a menos de 100 metros del mar. Se autorizó como excepción al estar sobre terrenos portuarios.",
curiosidades:"Tiene 26 plantas y 473 habitaciones. Su forma de vela rinde homenaje a la tradición marinera de Barcelona. Cuenta con la discoteca Eclipse en la planta 26 con vistas panorámicas. Ricardo Bofill se inspiró en el Burj Al Arab de Dubái. OBJETIVO: Pasar una noche en la suite contigo😉",
imgs:["hotel_vela1.jpg","hotel_vela2.jpg","hotel_vela3.jpg"]},


{id:"sagrada_familia",name:"Sagrada Familia",date:"1882-actualidad",
info:"La obra maestra inacabada de Antoni Gaudí. Basílica monumental que combina estilos gótico y Art Nouveau, declarada Patrimonio de la Humanidad por la UNESCO.",
history:"La construcción comenzó en 1882 bajo la dirección de Francisco de Paula del Villar. En 1883, Gaudí asumió el proyecto y lo transformó radicalmente, dedicándole los últimos 43 años de su vida. Gaudí sabía que no vería la basílica terminada y dejó planos y maquetas para sus sucesores. Se prevé su finalización para 2026.",
curiosidades:"La Sagrada Familia, donde Antoni Gaudí está enterrado en la cripta, será un templo con 18 torres (12 de apóstoles, 4 de evangelistas, 1 para la Virgen y 1 central para Jesús, de 172,5 m) y se financia solo con donativos y entradas. Ayer alcanzó su altura máxima de 172,5 m con la colocación de la cruz en la torre de Jesús, convirtiéndose en la iglesia más alta del mundo tras más de un siglo de construcción.",
imgs:["sagrada_familia1.jpg","sagrada_familia2.jpg","sagrada_familia3.jpg"]},


{id:"casa_batllo",name:"Casa Batlló",date:"1904-1906",
info:"Una de las obras maestras de Gaudí en el Passeig de Gràcia. Su fachada ondulante, colorida y llena de simbolismo representa la leyenda de Sant Jordi.",
history:"Gaudí reformó completamente un edificio existente de 1877 por encargo del empresario textil Josep Batlló. La reforma duró de 1904 a 1906. La fachada representa al dragón de la leyenda de Sant Jordi, con el tejado como su lomo escamoso y la torre con la cruz como la lanza del santo.",
curiosidades:"Es conocida como la 'Casa de los Huesos' por las formas óseas de sus balcones. No hay una sola línea recta en todo el edificio. El tejado simula las escamas de un dragón. En 2005 fue declarada Patrimonio de la Humanidad. Cada 23 de abril, Sant Jordi, la fachada se decora con rosas. Vendrás?",
imgs:["casa_batllo1.jpg","casa_batllo2.jpg","casa_batllo3.jpg"]},


{id:"la_pedrera",name:"La Pedrera (Casa Milà)",date:"1906-1912",
info:"Última obra civil de Gaudí antes de dedicarse por completo a la Sagrada Familia. Su fachada de piedra ondulante y su azotea con chimeneas-guerrero son únicas.",
history:"Encargada por Pere Milà y Roser Segimon como su residencia. Gaudí diseñó un edificio revolucionario sin muros de carga, con una estructura de pilares que permite plantas libres. Fue muy criticada en su época y la llamaron 'La Pedrera' (la cantera) como burla. Hoy es Patrimonio de la Humanidad.",
curiosidades:"El apodo 'La Pedrera' era un insulto que se convirtió en nombre popular. Las chimeneas de la azotea parecen guerreros y se les llama 'espantabrujas'. George Lucas se inspiró en ellas para los cascos de los Stormtroopers de Star Wars. Su garaje fue uno de los primeros de Barcelona. También és el escenario central en la serie de Netflix Ciudad de sombras, donde un asesinato ocurre en su fachada, convirtiendo el edificio en parte del misterio y la trama policial.",
imgs:["la_pedrera1.jpg","la_pedrera2.jpg","la_pedrera3.jpg"]}

];

// ===== INIT =====
let visited=JSON.parse(localStorage.getItem('cht_visited')||'[]');
let rating=parseInt(localStorage.getItem('cht_rating')||'0');

window.addEventListener('DOMContentLoaded',()=>{
  setTimeout(()=>document.getElementById('loader').classList.add('hidden'),2800);
  renderCards();
  updateProgress();
  if(rating>0)setStars(rating);
  initStars();
});

// ===== RENDER CARDS =====
function renderCards(){
  const grid=document.getElementById('sitesGrid');
  grid.innerHTML=sites.map((s,i)=>{
    const v=visited.includes(s.id);
    return`<div class="card ${v?'visited':''}" style="animation-delay:${i*.05}s">
      <img class="card-img" src="${s.imgs[0]}" alt="${s.name}" onclick="openModal('${s.id}')">
      <div class="card-body" onclick="openModal('${s.id}')">
        <div class="card-name">${s.name}</div>
        <div class="card-bottom">
          <span class="card-info-btn"><i class="fas fa-info-circle"></i> Info</span>
          <div class="card-check" onclick="event.stopPropagation();toggleVisit('${s.id}',this)">
            <i class="fas fa-check"></i>
          </div>
        </div>
      </div>
    </div>`}).join('');
}

// ===== TOGGLE VISIT =====
function toggleVisit(id,el){
  const card=el.closest('.card');
  if(visited.includes(id)){
    visited=visited.filter(v=>v!==id);
    card.classList.remove('visited');
  }else{
    visited.push(id);
    card.classList.add('visited');
    card.style.transform='scale(1.05)';
    setTimeout(()=>card.style.transform='',300);
  }
  localStorage.setItem('cht_visited',JSON.stringify(visited));
  updateProgress();
}

// ===== PROGRESS =====
function updateProgress(){
  const pct=Math.round(visited.length/sites.length*100);
  document.getElementById('progressFill').style.width=pct+'%';
  document.getElementById('progressLabel').textContent=`Has visto el ${pct}% del ChuchTour`;
  if(pct===100){setTimeout(()=>{launchConfetti();document.getElementById('completionMsg').classList.add('show')},600)}
}

// ===== MODAL =====
let currentSlide=0,startX=0;
function openModal(id){
  const s=sites.find(x=>x.id===id);
  const modal=document.getElementById('modal');
  const track=document.getElementById('carouselTrack');
  const dots=document.getElementById('carouselDots');
  currentSlide=0;
  track.innerHTML=s.imgs.map(img=>`<img src="${img}" alt="${s.name}">`).join('');
  dots.innerHTML=s.imgs.map((_,i)=>`<span class="${i===0?'active':''}"></span>`).join('');
  document.getElementById('modalBody').innerHTML=`
    <h2>${s.name}</h2>
    <p class="subtitle"><i class="fas fa-calendar-alt"></i> ${s.date}</p>
    <div class="info-block"><h4><i class="fas fa-landmark"></i> Información</h4><p>${s.info}</p></div>
    <div class="info-block"><h4><i class="fas fa-book"></i> Historia</h4><p>${s.history}</p></div>
    <div class="info-block"><h4><i class="fas fa-lightbulb"></i> Curiosidades</h4><p>${s.curiosidades}</p></div>`;
  modal.classList.add('open');
  // Touch events
  const c=document.getElementById('carousel');
  c.ontouchstart=e=>{startX=e.touches[0].clientX};
  c.ontouchend=e=>{
    const diff=startX-e.changedTouches[0].clientX;
    if(Math.abs(diff)>50){
      if(diff>0&&currentSlide<s.imgs.length-1)currentSlide++;
      else if(diff<0&&currentSlide>0)currentSlide--;
      track.style.transform=`translateX(-${currentSlide*100}%)`;
      dots.querySelectorAll('span').forEach((d,i)=>d.classList.toggle('active',i===currentSlide));
    }
  };
}
function closeModal(){document.getElementById('modal').classList.remove('open')}

// ===== STARS =====
function initStars(){
  document.querySelectorAll('#stars i').forEach(star=>{
    star.addEventListener('click',()=>{
      const v=parseInt(star.dataset.v);
      setStars(v);
      rating=v;
      localStorage.setItem('cht_rating',v);
      const msgs=['😕','🙂','😊 ¡Bien!','😍 ¡Genial!','🤩 ¡Increíble!'];
      document.getElementById('ratingMsg').textContent=msgs[v-1];
    });
  });
}
function setStars(n){
  document.querySelectorAll('#stars i').forEach((s,i)=>s.classList.toggle('active',i<n));
}

// ===== CONFETTI =====
function launchConfetti(){
  const canvas=document.getElementById('confetti'),ctx=canvas.getContext('2d');
  canvas.width=window.innerWidth;canvas.height=window.innerHeight;
  const pieces=[];
  const colors=['#f5576c','#f093fb','#ffd200','#4caf50','#2196f3','#ff9800'];
  for(let i=0;i<150;i++){
    pieces.push({x:Math.random()*canvas.width,y:Math.random()*canvas.height-canvas.height,
      w:Math.random()*10+5,h:Math.random()*6+4,
      color:colors[Math.floor(Math.random()*colors.length)],
      vx:(Math.random()-.5)*4,vy:Math.random()*3+2,
      rot:Math.random()*360,vr:(Math.random()-.5)*10});
  }
  let frames=0;
  function draw(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    pieces.forEach(p=>{
      p.x+=p.vx;p.y+=p.vy;p.rot+=p.vr;p.vy+=.05;
      ctx.save();ctx.translate(p.x,p.y);ctx.rotate(p.rot*Math.PI/180);
      ctx.fillStyle=p.color;ctx.fillRect(-p.w/2,-p.h/2,p.w,p.h);ctx.restore();
    });
    frames++;
    if(frames<300)requestAnimationFrame(draw);
    else ctx.clearRect(0,0,canvas.width,canvas.height);
  }
  draw();
}

function closeCompletion(){document.getElementById('completionMsg').classList.remove('show')}