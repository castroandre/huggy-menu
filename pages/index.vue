<template>
  <div>
    <header class="o-header">
      <strong class="title">Hamburgueria Huggy</strong>
    </header>

    <body>
      <vs-row vs-justify="center" class="content">
        <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="12">
          <div>
            <vs-col v-for="(product, index) in products" :key="index" type="flex" vs-justify="center" vs-align="center" vs-lg="3" vs-sm="4" vs-xs="6">
              <vs-card class="cardx">
                <div slot="media" @click="openDetails(product)" class="cursor-pointer">
                  <img :src="product.image">
                </div>
                <div @click="openDetails(product)" class="cursor-pointer">
                  <span>{{ product.name }}</span>
                  <br>
                  <span>{{ product.value.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) }}</span>
                </div>
                <div slot="footer">
                  <vs-row vs-justify="center">
                    <vs-input-number v-model="product.qtd"/>
                  </vs-row>
                </div>
              </vs-card>
            </vs-col>
          </div>
      </vs-col>
    </vs-row>

    </body>

    <footer class="o-footer">
      <vs-button ref="saveButton" type="gradient" @click="save">Finalizar pedido</vs-button>
    </footer>

    <vs-popup :title="product.name" vs-justify="center" :active.sync="details">
      <img class="details-img" :src="product.image">
      <br>
      <p>{{ product.description }}</p>
      <br>
      <p><strong>{{ product.value.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) }}</strong></p>
    </vs-popup>

  </div>
</template>

<script lang="ts">
import Logo from '~/components/Logo.vue'
import VuesaxLogo from '~/components/VuesaxLogo.vue'
import { MenuService } from "~/domain/services/MenuService";

export default {
  components: {
    Logo,
    VuesaxLogo
  },
  data:() => ({
    products: [
      {
        id: 101,
        name: "Higgor Burger",
        description: "Pão brioche, burger de 150g, creme de queijo, farofa de bacon no pão.",
        image: "/product_101.png",
        value: 29.99,
        qtd: 0
      },
      {
        id: 102,
        name: "Huggy Chat Burger",
        description: "Pão brioche, burger de 120g, crispy de pastrami, queijo meia cura, rúcula e molho da Chef.",
        image: "/product_102.png",
        value: 29.99,
        qtd: 0
      },
      {
        id: 103,
        name: "Flow Burger",
        description: "Burger de 180g, foie gras, demi glace e Rúcula.",
        image: "/product_103.png",
        value: 59.99,
        qtd: 0
      },
      {
        id: 104,
        name: "Workflow Burger",
        description: "Pão brioche, burger de 160g, pulled pork defumado em lenha de macieira, regado com barbecue e finalizado com american cheese.",
        image: "/product_104.png",
        value: 49.99,
        qtd: 0
      },
      {
        id: 105,
        name: "WA Burger",
        description: "Burger de 180g, creme de 4 queijos, tomatinho cereja confitado no óleo de bacon, molho de tomate da casa com manjericão e alho, pesto alla genovese no pão de brioche.",
        image: "/product_105.png",
        value: 34.99,
        qtd: 0
      },
      {
        id: 106,
        name: "Combo Messenger",
        description: "Burger 80 gramas com mozzarella, maionese trufado e toque de grana padano + Fritas individual + Coca 250ml.",
        image: "/product_106.png",
        value: 25.99,
        qtd: 0
      },
      {
        id: 107,
        name: "Combo WABA",
        description: "Double Smash Burger (100 gramas cada um), queijo cheddar, crisp de cebola e barbecue artesanal e pão australiano + fritras onduladas + Refrigerante 220ml.",
        image: "/product_107.png",
        value: 29.99,
        qtd: 0
      },
      {
        id: 108,
        name: "Sales Burger",
        description: "Burger de Wagyu Certificado de 140g, Maionese Heinz, Picles Picado, Anel de Cebola envolto de Bacon Artesanal, Recheado American Cheese de Queijo Prato e coberto com Shimeji na Manteiga com Sakê, no Pão Australiano.",
        image: "/product_108.png",
        value: 39.99,
        qtd: 0
      },
      {
        id: 109,
        name: "Suport Burger",
        description: "Hambúrguer com Blend Tradi 180g, queijo prato, pepperoni strips, cebola caramelizada, maionese verde no pão branco Attimino.",
        image: "/product_109.png",
        value: 32.99,
        qtd: 0
      },
      {
        id: 110,
        name: "Ticket Burger",
        description: "Pão Francês, 3 smash de 60g cada, American Cheese + Catupiry, Picles + Cebola Caramelizada.",
        image: "/product_110.png",
        value: 35.99,
        qtd: 0
      },
      {
        id: 201,
        name: "Coca Lata",
        description: "Coca Cola em lata 350ml.",
        image: "/product_201.png",
        value: 3.50,
        qtd: 0
      },
      {
        id: 202,
        name: "Guaraná Lata",
        description: "Guaraná Antarctica em lata 350ml.",
        image: "/product_202.png",
        value: 3.50,
        qtd: 0
      },
      {
        id: 203,
        name: "Coca 600ml",
        description: "Coca Cola de 600ml.",
        image: "/product_203.png",
        value: 4.50,
        qtd: 0
      },
      {
        id: 204,
        name: "Guaraná 600ml",
        description: "Guaraná Antarctica de 600ml.",
        image: "/product_204.png",
        value: 4.50,
        qtd: 0
      },
      {
        id: 205,
        name: "Coca 1L",
        description: "Coca Cola de 1L.",
        image: "/product_205.png",
        value: 5.50,
        qtd: 0
      },
      {
        id: 206,
        name: "Guaraná 1L",
        description: "Guaraná Antarctica de 1L.",
        image: "/product_206.png",
        value: 5.50,
        qtd: 0
      },
      {
        id: 207,
        name: "Água 500ml",
        description: "Água Cristal de 500ml.",
        image: "/product_207.png",
        value: 2.50,
        qtd: 0
      },
      {
        id: 208,
        name: "Água com gás 500ml",
        description: "Água Cristal com gás de 500ml.",
        image: "/product_208.png",
        value: 3.00,
        qtd: 0
      },
    ],
    productsSelected: [],
    product: {
      id: 0,
      name: "Produto",
      description: "",
      image: "",
      value: 0,
      qtd: 0
    },
    details: false,
    url: '',
    chatID: '',
    name: ''
  }),
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.chatID = this.getParam('chatID');
      this.url = this.getParam('url');
      this.name = this.getParam('name');
    },
    openDetails(product: any) {
      this.product = product;
      this.details = true;
    },
    getProductsSelected(): any {
      return this.products.filter(product => +product.qtd > 0);
    },
    formatData() {
      let amount = 0;
      let resume = '**Pedido:** \n';

      this.productsSelected.forEach(product => {
        const value = product.value * product.qtd;
        const valueFormated = value.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
        amount += product.value * product.qtd;
        resume += `\n ${product.qtd}x ${product.name} (_${product.value.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}_) - ${valueFormated}`;
      });
      "**Pedido:** \n 2x Hamburger 1 (_R$ 22,00_) - \n R$ 45,80 \n 1x Coca Cola 1L (_R$ 7,00_) - \n R$ 7,00 \n **Valor total do pedido: R$ 52,80**"

      resume += `\n\n **Valor total do pedido: ${amount.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}**`;

      return {
        amount,
        name: this.name,
        chatID: this.chatID,
        resume,
        products: this.productsSelected
      }

    },
    save() {
      let vm = this;
      vm.productsSelected = vm.getProductsSelected();

      if (vm.productsSelected.length === 0) {
        vm.notify('Algo está errado', 'Selecione pelo menos um produto!', 'danger', 'error');
        return false;
      }

      const data = vm.formatData();

      console.log(data);
      return false;

      vm.$vs.loading({ type:'material' });

      new MenuService(vm.$http)
        .get()
        .then(function(res) {
          console.log('res', res)
          window.location = vm.url;
        })
        .catch(function(e) {
          vm.$vs.loading.close();
          vm.notify('Algo está errado', e.message, 'danger', 'error');
        });
    },
    notify(title: string, text: string, color: string = 'success', icon: string = 'check_box'){
      this.$vs.notify({
        title,
        text,
        color,
        icon,
        position:'top-right',
        time: 8000
      });
    },
    getParam(param: string) {
      var params = window.location.search.substr(1).split('&');

      for (var i = 0; i < params.length; i++) {
          var p = params[i].split('=');
          if (p[0] == param) {
              return decodeURIComponent(p[1]);
          }
      }
      return '';
    }
  }
}
</script>

<style>
  @import '~/assets/styles/index.css';
</style>
