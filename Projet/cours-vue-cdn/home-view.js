export default  {
    data() {
        return {
            message: "<span>Hello world</span>",
            tab: [2, 3, 8, 5],
            personne: { id: 1, nom: 'doe', prenom: 'john' },
            nom: 'wick',
            personnes: [
                { id: 100, nom: 'Wick', prenom: 'John' },
                { id: 101, nom: 'Abruzzi', prenom: 'John' },
                { id: 102, nom: 'Marley', prenom: 'Bob' },
                { id: 103, nom: 'Segal', prenom: 'Steven' }
            ],
            lien: 'http://www.francefootball.fr',
            lienTarget: {
                href: 'http://www.francefootball.fr',
                target: '_blank'
            },
            couleur: 'white',
            couleurBg: 'red',
            rouge: true,
            couleurs: {
                backgroundColor: 'blue',
                color: 'white'
            },
            fonts: {
                fontWeight: 'bold',
                textDecoration: 'underline'
            },
            etat: false,
            texte: 'initial'

        }
    },
    methods: {
        direBonjour() {
            // for (const key in this.personne) {
            //     console.log(key, this.personne[key]);
            // }
            return `Bienvenu ${this.nom}`
        },
        bonjourNom(nom) {
            return `Bienvenu ${nom}`
        },
        rougeEtBleu() {
            this.rouge = !this.rouge
            if (this.rouge) {
                return 'rouge'
            } else {
                return 'bleu'
            }
        },
        sayHello() {
            alert('Hello')
        },
        changerEtat() {
            this.etat = !this.etat
        },
        afficherTexte(source, event) {
            console.log(source);
            console.log(event.target.value);
            console.log(event.data)
        },
        envoyerTexte(event) {
            this.texte = event.target.value
        }
    },
    watch: {
        texte(newValue, oldValue) {
            console.log(oldValue, newValue);
        }
    },
    template:
        `
        <h1>Binding</h1>
            <h2>Interpolation</h2>
            <p> {{ message }}</p>
            <p v-text="message"></p>
            <p v-html="message"></p>
            <ul>
                <li>{{ tab[0] }}</li>
                <li>{{ tab['1'] }}</li>
                <li>{{ tab["2"] }}</li>
            </ul>
            <p>{{ personne }}</p>
            <ul>
                <li>{{ personne.id }}</li>
                <li>{{ personne['nom'] }}</li>
                <li>{{ personne["prenom"] }}</li>
            </ul>
            <p> {{ tab[0] % 2 == 0 ? 'pair' : 'impair' }}</p>
            <p>{{ message.length }} </p>
    
            <p>{{ direBonjour() }}</p>
            <p>{{ bonjourNom('dalton') }}</p>
            <h2>v-for</h2>
            <ul>
                <li v-for="elt of tab">
                    {{ elt }}
                </li>
            </ul>
            <ul>
                <li v-for="elt in tab">
                    {{ elt }}
                </li>
            </ul>
            <ul>
                <li v-for="(elt, ind) in tab">
                    {{ ind }} : {{ elt }}
                </li>
            </ul>
            <ul>
                <li v-for="value in personne">
                    {{ value }}
                </li>
            </ul>
            <ul>
                <li v-for="(value,  key, ind) in personne">
                    {{ ind }} : {{ key }} : {{ value }}
                </li>
            </ul>
            <ul>
                <li v-for="elt of personnes">
                    {{ elt.id }} {{ elt.nom }} {{ elt.prenom }}
                </li>
            </ul>
            <ul>
                <li v-for="elt of personnes">
                    <template v-for="key of elt">
                        {{ key }}
                    </template>
                </li>
            </ul>
            <ul>
                <li v-for="i in 3">
                    {{ i }}
                </li>
            </ul>
            <h2>v-if</h2>
            <p v-if="tab[0] % 2 == 0">
                {{ tab[0] }} est pair
            </p>
            <p>
                <template v-if="tab[0] % 2 == 0">
                    {{ tab[0] }} est pair
                </template>
            </p>
            <p v-if="tab[1] % 2 == 0">
                {{ tab[1] }} est pair
            </p>
            <p v-else>
                {{ tab[1] }} est impair
            </p>
            <ul>
                <li v-for="elt of tab">
                    <template v-if="elt % 2 == 0">
                        {{ elt }} est pair
                    </template>
                    <template v-else>
                        {{ elt }} est impair
                    </template>
                </li>
            </ul>
            <h2>v-bind</h2>
            <div><a v-bind:href="lien">Sport</a></div>
            <div><a :href="lien">Sport</a></div>
            <div><a v-bind="lienTarget">Lien construit avec un objet</a></div>
            <h2>:class</h2>
            <p :class="nom == 'wick' ? 'rouge' : 'bleu'">
                {{ message }}
            </p>
    
            <p :class="{ 'rouge' : nom == 'wick', 'bleu' : nom != 'wick' }">
                {{ message }}
            </p>
            <p :class="rougeEtBleu()">
                {{ message }}
            </p>
            <p :class="rougeEtBleu()">
                {{ message }}
            </p>
            <ul>
                <li v-for="(elt, ind) of tab" :class="ind % 2 == 0 ? 'rouge': 'bleu'">
                    {{ elt }}
                </li>
            </ul>
            <h2>:style</h2>
            <p :style="{backgroundColor: couleurBg}">
                {{ message }}
            </p>
            <p :style="{backgroundColor: couleurBg, color: couleur}">
                {{ message }}
            </p>
            <p :style="couleurs">
                {{ message }}
            </p>
            <p :style="[couleurs, fonts]">
                {{ message }}
            </p>
            <h2>Event binding : v-on</h2>
            <button v-on:click="sayHello">
                dire bonjour
            </button>
            <button @click="sayHello">
                dire bonjour
            </button>
            <div>
                <!-- <button :disabled="etat" @click="etat=!etat">bouton1</button>
                <button :disabled="!etat" @click="etat=!etat">bouton2</button> -->
                <!-- <button :disabled="etat" @click="() => etat=!etat">bouton1</button>
                <button :disabled="!etat" @click="() => etat=!etat">bouton2</button> -->
                <button v-bind:disabled="etat" @click="changerEtat">bouton1</button>
                <button v-bind:disabled="!etat" @click="changerEtat">bouton2</button>
    
                <div>
                    <label for="texte">Votre nom</label>
                    <input type="text" @keyup.enter.alt="afficherTexte('nom', $event)">
                </div>
                <div>
                    <label for="texte">Votre prénom</label>
                    <input type="text" @input="afficherTexte('prénom', $event)">
                </div>
                <div>
                    <label for="texte">Votre texte</label>
                    <input type="text" @input="envoyerTexte">{{ texte }}
                </div>
                <div>
                    <label for="texte">Votre texte</label>
                    <input type="text" v-model="texte">{{ texte }}
                </div>
            </div>
        `
}
