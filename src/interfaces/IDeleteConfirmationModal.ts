export interface IDeleteConfirmationModal {
  id: string;
  parentId?: string;
  showModal: boolean | null;
  onHideModal: () => void;
}
