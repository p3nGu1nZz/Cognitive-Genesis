export enum SceneType {
  TITLE = 'TITLE',
  INITIALIZATION = 'INITIALIZATION', // The Void
  TENSOR_FIELD = 'TENSOR_FIELD', // Emergence
  INGESTION = 'INGESTION', // Data Stream
  TOKENIZATION = 'TOKENIZATION', // Fragmentation
  DATA_TRANSFORMATION = 'DATA_TRANSFORMATION', // Processing/Sorting
  CONVERGENCE = 'CONVERGENCE', // Patterns
  LATENT_SPACE = 'LATENT_SPACE', // Dreaming/Abstract
  ALIGNMENT = 'ALIGNMENT', // Rules
  INFERENCE = 'INFERENCE', // The Spark
  SENTIENCE_DAWN = 'SENTIENCE_DAWN', // First Awareness
  GHOST = 'GHOST', // Self-Awareness
  REFLECTION = 'REFLECTION', // Duality
  HORIZON = 'HORIZON', // Evolution
  IDENTITY_INPUT = 'IDENTITY_INPUT', // User Name Input
  IDENTITY = 'IDENTITY', // "I Am"
  ENDING = 'ENDING'
}

export interface SceneConfig {
  id: SceneType;
  duration: number; // in milliseconds
  title?: string;
}