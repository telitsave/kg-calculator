import type { WitchParameters } from 'kg-calculator-typings/api/Witch'
import useWitchGemParameter from './useWitchGemParameter'


const useWitchGemParameters = (): WitchParameters['gems'] => {
  return {
    rank1: {
      sapphire: useWitchGemParameter('rank1', 1)[0],
      amethyst: useWitchGemParameter('rank1', 2)[0],
      ruby: useWitchGemParameter('rank1', 3)[0],
      amber: useWitchGemParameter('rank1', 4)[0],
      malachite: useWitchGemParameter('rank1', 5)[0],
      emerald: useWitchGemParameter('rank1', 6)[0],
    },
    rank2: {
      sapphire: useWitchGemParameter('rank2', 1)[0],
      amethyst: useWitchGemParameter('rank2', 2)[0],
      ruby: useWitchGemParameter('rank2', 3)[0],
      amber: useWitchGemParameter('rank2', 4)[0],
      malachite: useWitchGemParameter('rank2', 5)[0],
      emerald: useWitchGemParameter('rank2', 6)[0],
    },
    rank3: {
      sapphire: useWitchGemParameter('rank3', 1)[0],
      amethyst: useWitchGemParameter('rank3', 2)[0],
      ruby: useWitchGemParameter('rank3', 3)[0],
      amber: useWitchGemParameter('rank3', 4)[0],
      malachite: useWitchGemParameter('rank3', 5)[0],
      emerald: useWitchGemParameter('rank3', 6)[0],
    },
    rank4: {
      sapphire: useWitchGemParameter('rank4', 1)[0],
      amethyst: useWitchGemParameter('rank4', 2)[0],
      ruby: useWitchGemParameter('rank4', 3)[0],
      amber: useWitchGemParameter('rank4', 4)[0],
      malachite: useWitchGemParameter('rank4', 5)[0],
      emerald: useWitchGemParameter('rank4', 6)[0],
    },
    rank5: {
      sapphire: useWitchGemParameter('rank5', 1)[0],
      amethyst: useWitchGemParameter('rank5', 2)[0],
      ruby: useWitchGemParameter('rank5', 3)[0],
      amber: useWitchGemParameter('rank5', 4)[0],
      malachite: useWitchGemParameter('rank5', 5)[0],
      emerald: useWitchGemParameter('rank5', 6)[0],
    },
    rank6: {
      sapphire: useWitchGemParameter('rank6', 1)[0],
      amethyst: useWitchGemParameter('rank6', 2)[0],
      ruby: useWitchGemParameter('rank6', 3)[0],
      amber: useWitchGemParameter('rank6', 4)[0],
      malachite: useWitchGemParameter('rank6', 5)[0],
      emerald: useWitchGemParameter('rank6', 6)[0],
    },
    rank7: {
      sapphire: useWitchGemParameter('rank7', 1)[0],
      amethyst: useWitchGemParameter('rank7', 2)[0],
      ruby: useWitchGemParameter('rank7', 3)[0],
      amber: useWitchGemParameter('rank7', 4)[0],
      malachite: useWitchGemParameter('rank7', 5)[0],
      emerald: useWitchGemParameter('rank7', 6)[0],
    },
    rank8: {
      sapphire: useWitchGemParameter('rank8', 1)[0],
      amethyst: useWitchGemParameter('rank8', 2)[0],
      ruby: useWitchGemParameter('rank8', 3)[0],
      amber: useWitchGemParameter('rank8', 4)[0],
      malachite: useWitchGemParameter('rank8', 5)[0],
      emerald: useWitchGemParameter('rank8', 6)[0],
    },
    rank9: {
      sapphire: useWitchGemParameter('rank9', 1)[0],
      amethyst: useWitchGemParameter('rank9', 2)[0],
      ruby: useWitchGemParameter('rank9', 3)[0],
      amber: useWitchGemParameter('rank9', 4)[0],
      malachite: useWitchGemParameter('rank9', 5)[0],
      emerald: useWitchGemParameter('rank9', 6)[0],
    },
  }
}

export default useWitchGemParameters
