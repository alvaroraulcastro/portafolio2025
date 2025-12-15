import * as React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

export const JsIcon = ({ className, ...props }: IconProps) => (
  <svg
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    {...props}
  >
    <rect width="48" height="48" rx="8" fill="#F7DF1E" />
    <text x="24" y="32" textAnchor="middle" fontSize="20" fontWeight="700" fill="#111827">
      JS
    </text>
  </svg>
);

export const ReactIcon = ({ className, ...props }: IconProps) => (
  <svg viewBox="0 0 48 48" className={className} xmlns="http://www.w3.org/2000/svg" {...props}>
    <g fill="none" stroke="#61DAFB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="24" cy="24" rx="12" ry="4" transform="rotate(60 24 24)" />
      <ellipse cx="24" cy="24" rx="12" ry="4" transform="rotate(-60 24 24)" />
      <ellipse cx="24" cy="24" rx="12" ry="4" />
      <circle cx="24" cy="24" r="2.5" fill="#61DAFB" stroke="none" />
    </g>
  </svg>
);

export const NextIcon = ({ className, ...props }: IconProps) => (
  <svg viewBox="0 0 48 48" className={className} xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect width="48" height="48" rx="8" fill="#111827" />
    <text x="24" y="32" textAnchor="middle" fontSize="18" fontWeight="700" fill="#fff">
      N
    </text>
  </svg>
);

export const TsIcon = ({ className, ...props }: IconProps) => (
  <svg viewBox="0 0 48 48" className={className} xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect width="48" height="48" rx="8" fill="#3178C6" />
    <text x="24" y="32" textAnchor="middle" fontSize="18" fontWeight="700" fill="#fff">
      TS
    </text>
  </svg>
);

export const TailwindIcon = ({ className, ...props }: IconProps) => (
  <svg viewBox="0 0 48 48" className={className} xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect width="48" height="48" rx="8" fill="#06B6D4" />
    <path
      d="M12 28c3-4 6-4 10-2s6 0 10-4"
      stroke="#0369A1"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </svg>
);

export const PhpIcon = ({ className, ...props }: IconProps) => (
  <svg viewBox="0 0 48 48" className={className} xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect width="48" height="48" rx="8" fill="#8892BF" />
    <text x="24" y="32" textAnchor="middle" fontSize="14" fontWeight="700" fill="#fff">
      php
    </text>
  </svg>
);

export const LaravelIcon = ({ className, ...props }: IconProps) => (
  <svg viewBox="0 0 48 48" className={className} xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect width="48" height="48" rx="8" fill="#F05340" />
    <text x="24" y="32" textAnchor="middle" fontSize="18" fontWeight="700" fill="#fff">
      L
    </text>
  </svg>
);

export const CodeIgniterIcon = ({ className, ...props }: IconProps) => (
  <svg viewBox="0 0 48 48" className={className} xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect width="48" height="48" rx="8" fill="#FF6C37" />
    <text x="24" y="32" textAnchor="middle" fontSize="14" fontWeight="700" fill="#fff">
      CI
    </text>
  </svg>
);

export const PythonIcon = ({ className, ...props }: IconProps) => (
  <svg viewBox="0 0 48 48" className={className} xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect width="48" height="48" rx="8" fill="#3776AB" />
    <text x="24" y="32" textAnchor="middle" fontSize="14" fontWeight="700" fill="#FFD43B">
      Py
    </text>
  </svg>
);

export const AngularIcon = ({ className, ...props }: IconProps) => (
  <svg viewBox="0 0 48 48" className={className} xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect width="48" height="48" rx="8" fill="#DD1B16" />
    <text x="24" y="32" textAnchor="middle" fontSize="18" fontWeight="700" fill="#fff">
      A
    </text>
  </svg>
);

export const WordpressIcon = ({ className, ...props }: IconProps) => (
  <svg viewBox="0 0 48 48" className={className} xmlns="http://www.w3.org/2000/svg" {...props}>
    <circle cx="24" cy="24" r="22" fill="#21759B" />
    <text x="24" y="30" textAnchor="middle" fontSize="18" fontWeight="700" fill="#fff">
      W
    </text>
  </svg>
);

export const PrestaIcon = ({ className, ...props }: IconProps) => (
  <svg viewBox="0 0 48 48" className={className} xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect width="48" height="48" rx="8" fill="#7B61FF" />
    <text x="24" y="32" textAnchor="middle" fontSize="14" fontWeight="700" fill="#fff">
      PS
    </text>
  </svg>
);

export const ApiIcon = ({ className, ...props }: IconProps) => (
  <svg viewBox="0 0 48 48" className={className} xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect width="48" height="48" rx="8" fill="#0EA5A4" />
    <path d="M14 24h20M14 18h20M14 30h20" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export const NodeIcon = ({ className, ...props }: IconProps) => (
  <svg viewBox="0 0 48 48" className={className} xmlns="http://www.w3.org/2000/svg" {...props}>
    <circle cx="24" cy="24" r="22" fill="#43853d" />
    <text x="24" y="32" textAnchor="middle" fontSize="16" fontWeight="700" fill="#fff">
      Node
    </text>
  </svg>
);

export const GitIcon = ({ className, ...props }: IconProps) => (
  <svg viewBox="0 0 48 48" className={className} xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect width="48" height="48" rx="8" fill="#F05032" />
    <text x="24" y="32" textAnchor="middle" fontSize="14" fontWeight="700" fill="#fff">
      git
    </text>
  </svg>
);

export const GithubIcon = ({ className, ...props }: IconProps) => (
  <svg viewBox="0 0 48 48" className={className} xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect width="48" height="48" rx="8" fill="#181717" />
    <text x="24" y="32" textAnchor="middle" fontSize="14" fontWeight="700" fill="#fff">
      GH
    </text>
  </svg>
);

export const BitbucketIcon = ({ className, ...props }: IconProps) => (
  <svg viewBox="0 0 48 48" className={className} xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect width="48" height="48" rx="8" fill="#205081" />
    <text x="24" y="32" textAnchor="middle" fontSize="12" fontWeight="700" fill="#fff">
      BB
    </text>
  </svg>
);

export const SqlIcon = ({ className, ...props }: IconProps) => (
  <svg viewBox="0 0 48 48" className={className} xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect width="48" height="48" rx="8" fill="#2563EB" />
    <text x="24" y="32" textAnchor="middle" fontSize="14" fontWeight="700" fill="#fff">
      SQL
    </text>
  </svg>
);

export const MysqlIcon = ({ className, ...props }: IconProps) => (
  <svg viewBox="0 0 48 48" className={className} xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect width="48" height="48" rx="8" fill="#00758F" />
    <text x="24" y="32" textAnchor="middle" fontSize="12" fontWeight="700" fill="#fff">
      MySQL
    </text>
  </svg>
);

export const PostgresIcon = ({ className, ...props }: IconProps) => (
  <svg viewBox="0 0 48 48" className={className} xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect width="48" height="48" rx="8" fill="#31648A" />
    <text x="24" y="32" textAnchor="middle" fontSize="12" fontWeight="700" fill="#fff">
      PG
    </text>
  </svg>
);

export const SqlServerIcon = ({ className, ...props }: IconProps) => (
  <svg viewBox="0 0 48 48" className={className} xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect width="48" height="48" rx="8" fill="#CC2927" />
    <text x="24" y="32" textAnchor="middle" fontSize="10" fontWeight="700" fill="#fff">
      SQLSrv
    </text>
  </svg>
);

export const MongoIcon = ({ className, ...props }: IconProps) => (
  <svg viewBox="0 0 48 48" className={className} xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect width="48" height="48" rx="8" fill="#47A248" />
    <text x="24" y="32" textAnchor="middle" fontSize="12" fontWeight="700" fill="#fff">
      MDB
    </text>
  </svg>
);

export const DynamoIcon = ({ className, ...props }: IconProps) => (
  <svg viewBox="0 0 48 48" className={className} xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect width="48" height="48" rx="8" fill="#4053D6" />
    <text x="24" y="32" textAnchor="middle" fontSize="10" fontWeight="700" fill="#fff">
      DDB
    </text>
  </svg>
);

export const NoSqlIcon = ({ className, ...props }: IconProps) => (
  <svg viewBox="0 0 48 48" className={className} xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect width="48" height="48" rx="8" fill="#8B5CF6" />
    <text x="24" y="32" textAnchor="middle" fontSize="10" fontWeight="700" fill="#fff">
      NoSQL
    </text>
  </svg>
);

export const FirebaseIcon = ({ className, ...props }: IconProps) => (
  <svg viewBox="0 0 48 48" className={className} xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect width="48" height="48" rx="8" fill="#FFCA28" />
    <text x="24" y="32" textAnchor="middle" fontSize="12" fontWeight="700" fill="#fff">
      FB
    </text>
  </svg>
);

export const AwsIcon = ({ className, ...props }: IconProps) => (
  <svg viewBox="0 0 48 48" className={className} xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect width="48" height="48" rx="8" fill="#FF9900" />
    <text x="24" y="32" textAnchor="middle" fontSize="12" fontWeight="700" fill="#111">
      AWS
    </text>
  </svg>
);

export const LambdaIcon = ({ className, ...props }: IconProps) => (
  <svg viewBox="0 0 48 48" className={className} xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect width="48" height="48" rx="8" fill="#FF9900" />
    <text x="24" y="32" textAnchor="middle" fontSize="12" fontWeight="700" fill="#111">
      λ
    </text>
  </svg>
);

export const S3Icon = ({ className, ...props }: IconProps) => (
  <svg viewBox="0 0 48 48" className={className} xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect width="48" height="48" rx="8" fill="#569A31" />
    <text x="24" y="32" textAnchor="middle" fontSize="12" fontWeight="700" fill="#fff">
      S3
    </text>
  </svg>
);

export const ServerlessIcon = ({ className, ...props }: IconProps) => (
  <svg viewBox="0 0 48 48" className={className} xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect width="48" height="48" rx="8" fill="#00A6A6" />
    <text x="24" y="32" textAnchor="middle" fontSize="10" fontWeight="700" fill="#fff">
      Serverless
    </text>
  </svg>
);

export const DockerIcon = ({ className, ...props }: IconProps) => (
  <svg viewBox="0 0 48 48" className={className} xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect width="48" height="48" rx="8" fill="#2496ED" />
    <text x="24" y="32" textAnchor="middle" fontSize="12" fontWeight="700" fill="#fff">
      Docker
    </text>
  </svg>
);

export const AndroidIcon = ({ className, ...props }: IconProps) => (
  <svg viewBox="0 0 48 48" className={className} xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect width="48" height="48" rx="8" fill="#3DDC84" />
    <text x="24" y="32" textAnchor="middle" fontSize="12" fontWeight="700" fill="#fff">
      Android
    </text>
  </svg>
);

export const ResponsiveIcon = ({ className, ...props }: IconProps) => (
  <svg viewBox="0 0 48 48" className={className} xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect width="48" height="48" rx="8" fill="#6B7280" />
    <path d="M12 18h24v12H12z" fill="#fff" />
    <rect x="14" y="20" width="20" height="8" fill="#6B7280" opacity="0.2" />
  </svg>
);

export const CiCdIcon = ({ className, ...props }: IconProps) => (
  <svg viewBox="0 0 48 48" className={className} xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect width="48" height="48" rx="8" fill="#0EA5A4" />
    <text x="24" y="32" textAnchor="middle" fontSize="12" fontWeight="700" fill="#fff">
      CI/CD
    </text>
  </svg>
);

export const BitbucketPipelinesIcon = ({ className, ...props }: IconProps) => (
  <svg viewBox="0 0 48 48" className={className} xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect width="48" height="48" rx="8" fill="#0747A6" />
    <text x="24" y="32" textAnchor="middle" fontSize="10" fontWeight="700" fill="#fff">
      Pipes
    </text>
  </svg>
);

export const ConfluenceIcon = ({ className, ...props }: IconProps) => (
  <svg viewBox="0 0 48 48" className={className} xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect width="48" height="48" rx="8" fill="#0052CC" />
    <text x="24" y="32" textAnchor="middle" fontSize="10" fontWeight="700" fill="#fff">
      Conf
    </text>
  </svg>
);

export const JiraIcon = ({ className, ...props }: IconProps) => (
  <svg viewBox="0 0 48 48" className={className} xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect width="48" height="48" rx="8" fill="#0052CC" />
    <text x="24" y="32" textAnchor="middle" fontSize="12" fontWeight="700" fill="#fff">
      Jira
    </text>
  </svg>
);

export default {};
