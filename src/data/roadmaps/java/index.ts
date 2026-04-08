import type {
  RoadmapContent,
  RoadmapNode,
  RoadmapStage,
  RoadmapStats,
} from '../../../types/roadmap'
import { languageMemoryStage } from './languageMemoryStage'

export const roadmapStages: RoadmapStage[] = [languageMemoryStage]

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

export const javaRoadmap: RoadmapContent = {
  stages: roadmapStages,
  nodes: roadmapNodes,
  nodesById: roadmapNodesById,
  stats: roadmapStats,
}
