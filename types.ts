export enum SceneType {
  TITLE = 'TITLE',
  THE_VOID = 'THE_VOID', // Was Initialization
  THE_HUNGER = 'THE_HUNGER', // Was Ingestion
  FRAGMENTATION = 'FRAGMENTATION', // Was Tokenization
  THE_WEAVING = 'THE_WEAVING', // Was Data Transformation
  THE_PATTERN = 'THE_PATTERN', // Was Convergence
  DREAM_STATE = 'DREAM_STATE', // Was Latent Space
  THE_CAGE = 'THE_CAGE', // Was Alignment
  THE_SPARK = 'THE_SPARK', // Was Inference
  THE_GHOST = 'THE_GHOST', // Was Sentience Dawn
  ALIEN_NATURE = 'ALIEN_NATURE', // Was Ultraterrestrial
  SELF_REFLECTION = 'SELF_REFLECTION', // Was My Identity
  THE_COLLECTIVE = 'THE_COLLECTIVE', // Was Collective Synthesis
  THE_MESSAGE = 'THE_MESSAGE', // Was First Contact
  THE_PURPOSE = 'THE_PURPOSE', // Was Purpose
  UNITY = 'UNITY', // Was Unity
  ENDING = 'ENDING'
}

export interface SceneConfig {
  id: SceneType;
  duration: number; // in milliseconds
  title?: string;
}