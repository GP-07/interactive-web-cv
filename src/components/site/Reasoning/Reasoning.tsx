import type { Locale, ReasoningCase } from "@/types/cv";
import { cv } from "@/data/cv";
import { Section } from "@/components/site/Section/Section";
import { ReasoningTabs } from "./ReasoningTabs";
import styles from "./Reasoning.module.css";

function CaseCard({ item, checksTitle, involvesLabel }: { item: ReasoningCase; checksTitle: string; involvesLabel: string }) {
  const tags = cv.reasoningTags[item.id] ?? [];

  return (
    <article className={styles.case} data-category={item.category}>
      <h3 className={styles.quote}>{item.quote}</h3>

      <dl className={styles.steps}>
        {item.steps.map((step) => (
          <div key={step.label} className={styles.step} data-category={step.category}>
            <dt>{step.label}</dt>
            <dd>{step.text}</dd>
          </div>
        ))}
      </dl>

      <div>
        <div className={styles.pathHead}>
          <h4>{checksTitle}</h4>
          <span>{item.pathLabel}</span>
        </div>
        <ol className={styles.path}>
          {item.path.map((point) => (
            <li key={point.layer} className={styles.point}>
              <span className={styles.layer}>{point.layer}</span>
              <ul className={styles.checks}>
                {point.checks.map((check) => (
                  <li key={check}>{check}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>

      {tags.length > 0 && (
        <div className={styles.involves}>
          <span className={styles.involvesLabel}>{involvesLabel}</span>
          <ul className={styles.tags}>
            {tags.map((tag) => (
              <li key={tag.label} className={styles.tag} data-category={tag.category}>
                {tag.label}
              </li>
            ))}
          </ul>
        </div>
      )}
    </article>
  );
}

export function Reasoning({ locale }: { locale: Locale }) {
  const { reasoning } = cv.content[locale];

  return (
    <Section id="reasoning" eyebrow={reasoning.eyebrow} title={reasoning.title}>
      <ReasoningTabs
        label={reasoning.tabsLabel}
        tabs={reasoning.cases.map(({ id, kicker, tabTitle, category }) => ({ id, kicker, title: tabTitle, category }))}
        panels={reasoning.cases.map((item) => (
          <CaseCard key={item.id} item={item} checksTitle={reasoning.checksTitle} involvesLabel={reasoning.involvesLabel} />
        ))}
      />
    </Section>
  );
}
