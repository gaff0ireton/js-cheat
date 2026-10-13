import { useRef, useState } from 'react';
import { Icon } from '@iconify/react';

type Props = {
  command: string;
  highlightedCode: string;
};

export default function Command({ command, highlightedCode }: Props) {
  const codeRef = useRef<HTMLElement>(null);

  const [status, setStatus] = useState<'idle' | 'copied' | 'failed'>('idle');

  const handleCopy = async () => {
    const currentCode = codeRef.current?.textContent ?? '';

    try {
      await navigator.clipboard.writeText(currentCode);

      setStatus('copied');
    } catch (err) {
      setStatus('failed');
    }

    setTimeout(() => {
      setStatus('idle');
    }, 2000);
  };

  return (
    <div className="card__code">
      <header className="card__header-code">
        <span className="card__icon">
          <Icon icon="mdi:code-tags" />
        </span>
        <p>JavaScript</p>
        <button
          type="button"
          className="card__copy-btn"
          onClick={handleCopy}
          data-tooltip={status === 'copied' ? 'コピーしました' : 'コードをコピー'}
          aria-label="コピー"
        >
          <Icon
            icon={
              status === 'copied' ? 'mdi:check' : status === 'failed' ? 'mdi:alert-circle-outline' : 'mdi:content-copy'
            }
          />
        </button>
      </header>

      <div className="card__command" dangerouslySetInnerHTML={{ __html: highlightedCode }} />
    </div>
  );
}
