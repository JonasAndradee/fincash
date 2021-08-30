import PurchaseFormSection from '../../components/organisms/PurchaseFormSection'
import MainTemplate from '../../components/template/MainTemplate'

const Purchase = () => {
  return (
    <MainTemplate noButton title="Criar Compras" page="/compras/cadastrar">
      <PurchaseFormSection />
    </MainTemplate>
  )
}

export default Purchase
