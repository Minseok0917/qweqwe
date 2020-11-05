const create = element => document.createElement(element);

const text = "ABCDEFGHIJKLNMOPQRSTUVWXYZ";

function create_circle(text,repeat=1){
	text = text.repeat(repeat);
	const circle = create("div");
	circle.classList.add("circle");
	text.split('').reduce( (acc,value,idx) =>{
		const { angle , height , size } = acc;
		const span = create("span");

		span.textContent = value;
		span.style.transform = `rotate(${angle}rad)`;
		span.style.height = `${50+(height*2.5)}px`;
		span.style.fontSize = `${size}px`;

		acc.height = height+1.5;
		acc.angle = angle+0.25;
		acc.size = size+0.2;
		setTimeout(() => { circle.append(span); },idx*20);
		
		return acc;
	},{angle:-1,height:0,size:12});
	document.body.append(circle);
}

create_circle(text,80);