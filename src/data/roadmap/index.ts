import type { RoadmapNode, RoadmapStage, RoadmapStats } from '../../types/roadmap'
import { craftFoundationsStage } from './craftFoundationsStage'
import { deliveryPlatformStage } from './deliveryPlatformStage'
import { systemDesignStage } from './systemDesignStage'
import { teamLeadershipStage } from './teamLeadershipStage'

export const roadmapStages: RoadmapStage[] = [
  craftFoundationsStage,
  systemDesignStage,
  deliveryPlatformStage,
  teamLeadershipStage,
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
