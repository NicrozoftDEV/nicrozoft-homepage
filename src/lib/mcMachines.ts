import { z } from 'astro/zod';
import type { IconName } from 'fluentui-astro-icons/render';
import tagDefinitions from '../data/machine-tags.json';

export type MachineTagId = keyof typeof tagDefinitions;
export const machineTagIdSchema = z.enum(Object.keys(tagDefinitions) as [MachineTagId, ...MachineTagId[]]);

const machineTagSchema = z.object({
  label: z.string(),
  /**
   * Fluent System Icon family name; the renderer rejects unknown names at build time.
   * Note the `cellular-data-*` families count down from full signal, so the efficiency
   * tiers reference them in reverse (tier 3 is `-1`).
   */
  icon: z.custom<IconName>((value) => typeof value === 'string'),
  tone: z.enum(['neutral', 'success', 'caution', 'critical', 'accent']),
  hint: z.string().optional(),
});

export type MachineTagDef = z.infer<typeof machineTagSchema>;
export const machineTags = z.record(machineTagIdSchema, machineTagSchema).parse(tagDefinitions);

export const machineSchema = z.object({
  name: z.string(),
  tags: z.array(machineTagIdSchema),
});
export type Machine = z.infer<typeof machineSchema>;
