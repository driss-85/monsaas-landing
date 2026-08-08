import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import '../styles/fonts.css';
import '../styles/tokens.css';
import '../styles/base.css';
import '../styles/sections.css';
import '../styles/legal.css';

import { LegalPage } from '../components/LegalPage';
import type { LegalPage as LegalPageData } from '../content';

export function mountLegal(page: LegalPageData) {
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <LegalPage page={page} />
    </StrictMode>,
  );
}
