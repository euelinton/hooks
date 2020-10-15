# Hooks + Typescript

## Hooks

### useState
Utilizado para controlarmos alguma variável de estado dentro de um function component.

### useEffect
Responsável por operar efeitos colaterais durante a renderização do nosso componente.

### useRef
Faz referência a algum elemento do DOM.

### useMemo
Retorna um valor memorizado.

### useCallback
Retorna uma versão memorizada do callback que só muda se uma das entradas tiverem sido alteradas.

### useContext
Aceita um objeto de contexto e retorna o valor atual do contexto.

### useReducer
Funciona como um alternativa para `useState`. Aceita um reducer do tipo (state, action) => newState e retorna o estado atual, junto com um método dispatch.

### useImperativeHandle
Personaliza o valor da instância que está exposta aos components pai ao usar ref. O useImperativeHandle deve ser usado com forwardRef.
