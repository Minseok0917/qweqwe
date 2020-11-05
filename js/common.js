const create = element => document.createElement(element);

const text = "ABCDEFGHIJKLNMOPQRSTUVWXYZ";

function create_circle(text,repeat=1){
	console.log(text.length);
	const text_repeat = text.repeat(repeat);
	const circle = create("div");
	circle.classList.add("circle");
	text_repeat.split('').reduce( (acc,value,idx) =>{
		const { angle , height , size } = acc;
		const span = create("span");

		span.textContent = value;
		span.style.transition = "0.5s";
		span.style.transform = ` translate3d(-5px, 2px, -${ Math.floor(idx/text.length) * 200  }px) rotate(${angle}rad)`;
		span.style.height = `${50+(height*2.5)}px`;
		span.style.fontSize = `${size}px`;

		acc.height = height+1.5;
		acc.angle = angle+0.25;
		acc.size = size+0.2;
		
		const append = () =>{
			circle.append(span); 
		}
		setTimeout(append,idx*20)		
		return acc;
	},{angle:-1,height:0,size:12});
	document.body.append(circle);
}

for(let i=1; i<100; i++){
	setTimeout(()=>{
		create_circle(text,3);
	},i*1000);
}