export interface Owner {
  rid: string;
  rtype: string;
}

export interface Metadata {
  name: string;
  archetype: string;
}

export interface On {
  on: boolean;
}

export interface Dimming {
  brightness: number;
  min_dim_level: number;
}

export interface MirekSchema {
  mirek_minimum: number;
  mirek_maximum: number;
}

export interface ColorTemperature {
  mirek: number;
  mirek_valid: boolean;
  mirek_schema: MirekSchema;
}

export interface Dynamics {
  status: string;
  status_values: string[];
  speed: number;
  speed_valid: boolean;
}

export interface Alert {
  action_values: string[];
}

export interface Effects {
  status_values: string[];
  status: string;
  effect_values: string[];
}

export interface XY {
  x: number;
  y: number;
}

export interface Color {
  gamut: {
    blue: XY;
    green: XY;
    red: XY;
  };
  xy: XY;
}

export interface Light {
  id: string;
  id_v1: string;
  owner: Owner;
  metadata: Metadata;
  on: On;
  dimming: Dimming;
  dimming_delta: unknown;
  color_temperature: ColorTemperature;
  color_temperature_delta: unknown;
  dynamics: Dynamics;
  alert: Alert;
  signaling: unknown;
  mode: string;
  effects: Effects;
  type: string;
  color: Color;
}
