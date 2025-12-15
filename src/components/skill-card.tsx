import type { ReactNode } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface SkillCardProps {
  name: string;
  icon: ReactNode;
  description: string;
  className?: string; // Add className prop
}

export function SkillCard({ name, icon, description, className }: SkillCardProps) {
  return (
    <Card
      role="article"
      className={cn('flex flex-col transition-all hover:shadow-lg bg-card', className)}
    >
      {' '}
      {/* Apply className */}
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-lg font-medium">{name}</CardTitle>
        {icon}
      </CardHeader>
      <CardContent className="flex-1">
        <CardDescription>{description}</CardDescription>
      </CardContent>
    </Card>
  );
}
