import styles from './styles.module.scss';

const { folder, folder__title } = styles;

interface FolderTitle {
  title: string;
}

export const Folder = ({ title }: FolderTitle) => {
  return (
    <article className={folder}>
      <h2 className={folder__title}>{title}</h2>
    </article>
  );
};
