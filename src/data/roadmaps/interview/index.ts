import type {
  RoadmapContent,
  RoadmapNode,
  RoadmapStage,
  RoadmapStats,
} from '../../../types/roadmap'
import { angularInterviewStage } from './angularInterviewStage'
import { javaInterviewStage } from './javaInterviewStage'
import { nestJsInterviewStage } from './nestJsInterviewStage'
import { reactInterviewStage } from './reactInterviewStage'
import { springBootInterviewStage } from './springBootInterviewStage'
import { sqlInterviewStage } from './sqlInterviewStage'
import { typescriptInterviewStage } from './typescriptInterviewStage'

export const roadmapStages: RoadmapStage[] = [
  javaInterviewStage,
  springBootInterviewStage,
  typescriptInterviewStage,
  reactInterviewStage,
  angularInterviewStage,
  sqlInterviewStage,
  nestJsInterviewStage,
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

export const interviewRoadmap: RoadmapContent = {
  stages: roadmapStages,
  nodes: roadmapNodes,
  nodesById: roadmapNodesById,
  stats: roadmapStats,
}
