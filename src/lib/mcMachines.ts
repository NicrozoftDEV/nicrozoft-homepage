import { z } from 'astro/zod';
import tagDefinitions from '../data/machine-tags.json';

export type MachineTagId = keyof typeof tagDefinitions;
export const machineTagIdSchema = z.enum(Object.keys(tagDefinitions) as [MachineTagId, ...MachineTagId[]]);

const machineTagSchema = z.object({
  label: z.string(),
  icon: z.string(),
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
