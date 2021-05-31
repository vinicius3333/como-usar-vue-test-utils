import {
    shallowMount
} from '@vue/test-utils'
import Botao from '@/components/Botao.vue'

describe('Testando props', () => {
    it('Deve renderizar o botão com o texto passado', () => {
        const texto = 'Texto do botão';
        const wrapper = shallowMount(Botao, {
            propsData: {
                texto
            }
        });
        expect(wrapper.text()).toMatch(texto);
    })

    // it('Deve desativar o botão quando passado a prop', () => {
    //     const wrapper = shallowMount(Botao, {
    //         propsData: {
    //             desativado: true
    //         }
    //     });
    //     expect(wrapper.element.disabled).toBe(true);
    // })
})

describe('Testando eventos', () => {
    it('Deve emitir o evento de clique quando houver clique no botao', () => {
        const wrapper = shallowMount(Botao);

        wrapper.trigger("click");

        expect(wrapper.emitted().click).toBeTruthy();
    })
})

describe('Testando slots', () => {
    it('Deve renderizar o texto que é passado no slot default', () => {
        const textoSlot = "Texto do slot";

        const wrapper = shallowMount(Botao, {
            slots: {
                default: textoSlot
            }
        })

        expect(wrapper.text()).toBe(textoSlot);
    })
})