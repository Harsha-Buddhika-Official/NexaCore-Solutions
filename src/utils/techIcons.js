import CodeIcon from "@mui/icons-material/Code";
import StorageIcon from "@mui/icons-material/Storage";
import HubIcon from "@mui/icons-material/Hub";
import CloudIcon from "@mui/icons-material/Cloud";
import ViewInArIcon from "@mui/icons-material/ViewInAr";
import TerminalIcon from "@mui/icons-material/Terminal";
import BuildIcon from "@mui/icons-material/Build";
import InsightsIcon from "@mui/icons-material/Insights";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import PsychologyIcon from "@mui/icons-material/Psychology";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import MemoryIcon from "@mui/icons-material/Memory";

const ICON_RULES = [
  { keywords: ["react", "next", "typescript", "javascript"], icon: CodeIcon },
  { keywords: ["node", "express", "go", "golang", "rust"], icon: TerminalIcon },
  { keywords: ["postgres", "mongo", "sql", "redis"], icon: StorageIcon },
  { keywords: ["kubernetes", "k8s"], icon: HubIcon },
  { keywords: ["aws", "azure", "gcp", "cloud"], icon: CloudIcon },
  { keywords: ["docker"], icon: ViewInArIcon },
  { keywords: ["terraform"], icon: BuildIcon },
  { keywords: ["prometheus", "grafana"], icon: InsightsIcon },
  { keywords: ["grpc", "protobuf"], icon: AccountTreeIcon },
  { keywords: ["python", "pytorch", "ai", "ml"], icon: PsychologyIcon },
  { keywords: ["flutter"], icon: PhoneIphoneIcon },
];

export const getTechIcon = (tagLabel) => {
  const normalized = tagLabel.toLowerCase();
  const match = ICON_RULES.find((rule) =>
    rule.keywords.some((keyword) => normalized.includes(keyword))
  );
  return match ? match.icon : MemoryIcon;
};