import type {
  RoadmapContent,
  RoadmapNode,
  RoadmapStage,
  RoadmapStats,
} from '../../../types/roadmap'
import { configurationAssemblyStage } from './configurationAssemblyStage'
import { containerFoundationsStage } from './containerFoundationsStage'
import { operationsObservabilityStage } from './operationsObservabilityStage'
import { runtimeBehaviorStage } from './runtimeBehaviorStage'

export const roadmapStages: RoadmapStage[] = [
  containerFoundationsStage,
  configurationAssemblyStage,
  runtimeBehaviorStage,
  operationsObservabilityStage,
]

export const roadmapNodes: RoadmapNode[] = roadmapStages.flatMap((stage) => stage.nodes)

export const roadmapNodesById: Record<string, RoadmapNode> = Object.fromEntries(
  roadmapNodes.map((node) => [node.id, node]),
)

export const roadmapStats: RoadmapStats = {
  stageCount: roadmapStages.length,
  nodeCount: roadmapNodes.length,
  knowledgeGroupCount: roadmapNodes.reduce(
    (total, node) => total + node.knowledgeGroups.length,
    0,
  ),
  resourceCount: roadmapNodes.reduce(
    (total, node) =>
      total +
      node.knowledgeGroups.reduce(
        (groupTotal, group) => groupTotal + group.resources.length,
        0,
      ),
    0,
  ),
}

export const springBootRoadmap: RoadmapContent = {
  stages: roadmapStages,
  nodes: roadmapNodes,
  nodesById: roadmapNodesById,
  stats: roadmapStats,
}
