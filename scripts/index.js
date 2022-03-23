import { cards } from "../data/cards.js"
const main = document.getElementById('main')

document.addEventListener('DOMContentLoaded', printCards(cards))


async function printCards(cards) {
    cards.forEach((card)=> {
        const { price, name, description, options } = card
        if(card.name == 'Básico'){
            main.innerHTML += `
        <div class="card">
            <span class="price_text"><h2 class="price">$${price}</h2> /mes</span>
            <h2 class="title_card">${name}</h2>
            <p class="description">${description}</p>
            <span class="option"><i class="fa-solid fa-circle-check"></i>${options[0]}</span>
            <span class="option opacity"><i class="fa-solid fa-circle-check"></i>${options[1]}</span>
            <span class="option opacity"><i class="fa-solid fa-circle-check"></i>${options[2]}</span>
            <span class="option opacity"><i class="fa-solid fa-circle-check"></i>${options[3]}</span>
            <button class="btn_add">Elegir plan</button>
        </div>
        `
        }else if (card.name == 'Intermedio'){
            main.innerHTML += `
            <div class="card">
                <span class="price_text"><h2 class="price">$${price}</h2> /mes</span>
                <h2 class="title_card">${name}</h2>
                <p class="description">${description}</p>
                <span class="option"><i class="fa-solid fa-circle-check"></i>${options[0]}</span>
                <span class="option"><i class="fa-solid fa-circle-check"></i>${options[1]}</span>
                <span class="option opacity"><i class="fa-solid fa-circle-check"></i>${options[2]}</span>
                <span class="option opacity"><i class="fa-solid fa-circle-check"></i>${options[3]}</span>
                <button class="btn_add">Elegir plan</button>
            </div>
            `
        }else if(card.name == 'Profesional'){
            main.innerHTML += `
            <div class="card card_dest">
                <span class="mejor">MÁS POPULAR</span>
                <span class="price_text"><h2 class="price">$${price}</h2> /mes</span>
                <h2 class="title_card">${name}</h2>
                <p class="description">${description}</p>
                <span class="option span_dest"><i class="fa-solid fa-circle-check"></i>${options[0]}</span>
                <span class="option span_dest"><i class="fa-solid fa-circle-check"></i>${options[1]}</span>
                <span class="option span_dest"><i class="fa-solid fa-circle-check"></i>${options[2]}</span>
                <span class="option span_dest"><i class="fa-solid fa-circle-check"></i>${options[3]}</span>
                <button class="btn_add black">Elegir plan</button>
            </div>
            `
        }else {
            main.innerHTML += `
            <div class="card">
                <span class="price_text"><h2 class="price">$${price}</h2> /mes</span>
                <h2 class="title_card">${name}</h2>
                <p class="description">${description}</p>
                <span class="option"><i class="fa-solid fa-circle-check"></i>${options[0]}</span>
                <span class="option"><i class="fa-solid fa-circle-check"></i>${options[1]}</span>
                <span class="option"><i class="fa-solid fa-circle-check"></i>${options[2]}</span>
                <span class="option"><i class="fa-solid fa-circle-check"></i>${options[3]}</span>
                <button class="btn_add">Elegir plan</button>
            </div>
            `
        }
    })
}