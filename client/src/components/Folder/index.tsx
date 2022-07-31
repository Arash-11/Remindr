import styles from './styles.module.scss';

const { folder } = styles;

export interface FolderProps {
  title: string;
}

export const Folder = ({ title }: FolderProps) => {
  return (
    <a href='/' className={folder}>
      {title}
    </a>
  );
};
