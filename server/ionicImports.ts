import dynamic from 'next/dynamic';
export const IonHeader = dynamic(
    async () => {
      const mod = await import('@ionic/react');
      return mod.IonHeader;
    },
    { ssr: false }
  );
export const IonToolbar = dynamic(
    async () => {
      const mod = await import('@ionic/react');
      return mod.IonToolbar;
    },
    { ssr: false }
  );
export const IonSegment = dynamic(
    async () => {
      const mod = await import('@ionic/react');
      return mod.IonSegment;
    },
    { ssr: false }
  );
export const IonSegmentButton = dynamic(
    async () => {
      const mod = await import('@ionic/react');
      return mod.IonSegmentButton;
    },
    { ssr: false }
  );
export const IonGrid = dynamic(
    async () => {
      const mod = await import('@ionic/react');
      return mod.IonGrid;
    },
    { ssr: false }
  );
export const IonRow = dynamic(
    async () => {
      const mod = await import('@ionic/react');
      return mod.IonRow;
    },
    { ssr: false }
  );
export const IonCol = dynamic(
    async () => {
      const mod = await import('@ionic/react');
      return mod.IonCol;
    },
    { ssr: false }
  );
export const IonButton = dynamic(
    async () => {
      const mod = await import('@ionic/react');
      return mod.IonButton;
    },
    { ssr: false }
  );
export const IonTitle = dynamic(
    async () => {
      const mod = await import('@ionic/react');
      return mod.IonTitle;
    },
    { ssr: false }
  );
export const IonLabel = dynamic(
    async () => {
      const mod = await import('@ionic/react');
      return mod.IonLabel;
    },
    { ssr: false }
  );