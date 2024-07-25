function toggleMode(){
    const html = document.documentElement;
    html.classList.toggle('light');
    
    const img = document.querySelector("#profile img");

    if(html.classList.contains('light')){
        img.setAttribute('src', '../assets/avatar-light.png');
        img.setAttribute('alt', '3 Amigos que gostam de visitar cafés de maringá')
    }else{
      img.setAttribute('src','../assets/Avatar.png');
      img.setAttribute('alt', 'Apenas Luan Longen');
    }

    
}