import {IonContent, IonHeader, IonPage, IonTitle, IonToolbar} from "@ionic/react"
import {RoleBasedGuard} from "components/RoleBasedGuard"
import {MainAppLayout} from "layouts/main/MainAppLayout"
import {AdminRole} from "utils/roles"

export default function ItemsPage() {

  return (
    <>
      тут должна быть форма для создания карточек
    </>
  )
}

ItemsPage.getLayout = (page: React.ReactElement) => (
  <MainAppLayout>
    <RoleBasedGuard
      roles={{[AdminRole.Admin]: []}}
      fallback={
        <h4 className="font-bold py-0 text-s text-gray-400 dark:text-gray-500 uppercase">
          Доступа нет
        </h4>
        // <PagePermissionDenied />
      }
    >
      {page}
    </RoleBasedGuard>
    /</MainAppLayout>
)
