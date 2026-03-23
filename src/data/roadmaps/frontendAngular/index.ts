import type {
  RoadmapContent,
  RoadmapNode,
  RoadmapStage,
  RoadmapStats,
} from '../../../types/roadmap'
import { architectureFoundationsStage } from './architectureFoundationsStage'
import { dataFlowContractsStage } from './dataFlowContractsStage'
import { formsContractsStage } from './formsContractsStage'
import { qualityScaleStage } from './qualityScaleStage'
import { renderingReactivityStage } from './renderingReactivityStage'
import { rxjsStateStage } from './rxjsStateStage'

export const roadmapStages: RoadmapStage[] = [
  architectureFoundationsStage,
  renderingReactivityStage,
  formsContractsStage,
  dataFlowContractsStage,
  rxjsStateStage,
  qualityScaleStage,
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

export const frontendAngularRoadmap: RoadmapContent = {
  stages: roadmapStages,
  nodes: roadmapNodes,
  nodesById: roadmapNodesById,
  stats: roadmapStats,
}
