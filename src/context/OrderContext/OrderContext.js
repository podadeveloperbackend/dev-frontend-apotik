import React from "react";
import { changeStatusOrder, createOrder, getOrder, getOrderUserId, getOrderById, inputResi, createOrderCashier } from "../../services/Order/api";
import { useAuthContext } from "../AuthContext/AuthContext";
import { useNavigate } from "react-router-dom";
import { showFailedToast } from "../../components/Toast/showFailedToast";
import { showSuccessToast } from "../../components/Toast/showSuccessToast";

export const OrderContext = React.createContext()

export const useOrderContext = () => {
    return React.useContext(OrderContext)
}

const OrderContextProvider = ({ children }) => {
    const { user } = useAuthContext()
    const [id, setId] = React.useState(0)
    const [userId, setUserId] = React.useState()
    const [dataOrder, setDataOrder] = React.useState([])
    const [fixPrice, setFixPrice] = React.useState(0)
    const [status, setStatus] = React.useState(0)
    const [subTotal, setSubTotal] = React.useState(0)
    const [foto, setFoto] = React.useState([])
    const [type, setType] = React.useState(0)
    const [noHp, setNoHp] = React.useState(0)
    const [province, setProvince] = React.useState("Sumatera Utara")
    const [cityRegency, setCityRegency] = React.useState("Kota Medan")
    const [subdistrict, setSubdistrict] = React.useState("Simalungun")
    const [postalCode, setPostalCode] = React.useState("627867")
    const [name, setName] = React.useState("Davit")
    const [email, setEmail] = React.useState("davait@gmail.com")
    const [noResi, setNoResi] = React.useState("")
    const [address, setAddress] = React.useState("Silampuluh")
    const [note, setNote] = React.useState("")
    const [methodPayment, setMethodPayment] = React.useState("")
    const [isLoading, setIsLoading] = React.useState(false)
    const [orders, setOrders] = React.useState([])
    const [orderDetail, setOrderDetail] = React.useState({})
    const [isShipping, setIsShipping] = React.useState(false)
    const [typeFilter, setTypeFilter] = React.useState(0)
    const [isOpen, setIsOpen] = React.useState(false)
    const [isDetail, setIsDetail] = React.useState(true)
    const [openDibayar, setOpenDibayar] = React.useState(false)
    const [tunai, setTunai] = React.useState()
    const navigate = useNavigate()
    const handleOpenModal = () => {
        setNoResi("")
        setIsOpen(true)
    }

      React.useEffect(() => {
        if (user?.id) {
          setUserId(user.id);
        }
      }, []);

    const handleOpenOrder = (id, subTotal) => {
        setFixPrice(subTotal)
        setIsOpen(true)
    }

    const handleOpenDibayar = (id) => {
        setIsOpen(true)
        setId(id)
        setType(1)
        setOpenDibayar(true)
    }

    const handleResetState = () => {
        setId(0)
        setStatus(0)
        setDataOrder([])
        setOrderDetail({})
        setSubTotal(0)
        setFoto([])
        setType(0)
        setNoHp(0)
        setName("")
        setEmail("")
        setNoResi("")
        setAddress("")
        setProvince("")
        setCityRegency("")
        setSubdistrict("")
        setPostalCode("")
        setNote("")
        setMethodPayment("")
        setIsOpen(false)
        setIsDetail(false)
        setOpenDibayar(false)
        setTunai()
    }

    const handleCloseModal = () => {
        handleResetState()
    }

    const handleCashCashier = async() => {
        const image = () => {
                  for (let i = 0; i < foto.length; i++) {
                        return foto[i]
                    }
        }

        if(tunai < subTotal ) {
            return showFailedToast("Uang tunai tidak cukup")
        }

        if(!subTotal || !userId || !methodPayment) {
            return showFailedToast("Gagal membuat pesanan")
            ;
        }
        try {
            const formData = new FormData();
                formData.append("dataOrder", JSON.stringify(dataOrder));
                formData.append("user_id", userId);
                formData.append("sub_total", Number(subTotal));
                formData.append("type", 2);
                formData.append("status", 3);
                formData.append("no_hp", "0");
                formData.append("name", "Customer");
                formData.append("email", "-");
                formData.append("province", "-");
                formData.append("city_regency", "-");
                formData.append("subdistrict", "-");
                formData.append("postal_code", 0);
                formData.append("method_payment", methodPayment);
                formData.append("address", "-");
                formData.append("note", "-");
                for (let i = 0; i < foto.length; i++) {
                    formData.append("image", foto[i]);
                }
           const response = await createOrderCashier(formData)
            navigate(`/cashier/transaction/struct/${response.id}?tunai=${tunai}`)
            showSuccessToast("Berhasil membuat pesanan")
            handleCloseModal()
        } catch (error) {
        }
    }

    
    const handleCreateOrder = async() => {
        const image = () => {
                  for (let i = 0; i < foto.length; i++) {
                        return foto[i]
                    }
        }
        if(!subTotal || !userId || !noHp || !name || !email || !province || !cityRegency || !subdistrict || !postalCode || !methodPayment || !address) {
             return showFailedToast("Gagal membuat pesanan")
        }
        try {
            const formData = new FormData();
                formData.append("dataOrder", JSON.stringify(dataOrder));
                formData.append("user_id", userId);
                formData.append("sub_total", Number(subTotal));
                formData.append("type", 1);
                formData.append("no_hp", noHp);
                formData.append("name", name);
                formData.append("email", email);
                formData.append("province", province);
                formData.append("city_regency", cityRegency);
                formData.append("subdistrict", subdistrict);
                formData.append("postal_code", postalCode);
                formData.append("method_payment", methodPayment);
                formData.append("address", address);
                formData.append("note", note);
                for (let i = 0; i < foto.length; i++) {
                    formData.append("image", foto[i]);
                }
            const response = await createOrder(formData)
            if(response.status_code === 201) {
                showSuccessToast("Berhasil membuat pesanan")
                navigate("/")
            } else {
            showFailedToast("Gagal membuat pesanan")
            }
        } catch (error) {
            
        } finally {
            handleCloseModal()
        }
    }

        const handleGetUserOrders = async (userId) => {
            setIsLoading(true)
            try {
                const response = await getOrderUserId({
                    userId
                })
                handleResetState()
                setOrders(response.orders)
            } catch (error) {
                
            } finally {
                setIsLoading(false)
            }
        }

    const handleGetOrders = async (id) => {
            setIsLoading(true)
            try {
                const response = await getOrder({
                    type: typeFilter,
                    id
                })
                handleResetState()
                setOrders(response.orders)
            } catch (error) {
                
            } finally {
                setIsLoading(false)
            }
        }
     const handleGetOrderById = async (id) => {
        setIsLoading(true)
        try {
            const response = await getOrderById({
                id
            })
            handleResetState()
            setOrderDetail(response.order)
        } catch (error) {
            
        } finally {
            setIsLoading(false)
        }
    }

    const handleDetail = (data) => {
        console.log(data)
        setName(data.name)
        setEmail(data.email)
        setNoHp(data.no_hp)
        setNote(data.note)
        setStatus(data.status)
        setSubTotal(data.sub_total)
        setNoResi(data.noresi)
        setFoto(data.imageUrl[0])
        setType(data.type)
        setIsDetail(true)
        setIsOpen(true)
    }

    const handleChangeStatusDibayar = async() => {
        try {
            await changeStatusOrder(id, {
                type: 1,
                subTotal
            })
            handleGetOrders()
        } catch (error) {
            
        }
    }

    const handleChangeStatus = async(id, status) => {
        try {
            await changeStatusOrder(id, {
                type: status
            })
            handleGetOrders()
        } catch (error) {
            
        }
    }

    const handleInputResi = async() => {
        try {
            await inputResi(id, {
                noresi: noResi,
                type: 2
            })
            handleGetOrders()
        } catch (error) {
            
        }
    }

    // useDebounce(handleGetOrders, 500, [typeFilter])

    const valueContext = {
        id,
        setId,
        status,
        setStatus,
        subTotal,
        setSubTotal,
        foto,
        setFoto,
        type,
        setType,
        noHp,
        setNoHp,
        name,
        userId,
        setUserId,
        setDataOrder,
        setName,
        email,
        setEmail,
        province,
        setProvince,
        cityRegency,
        setCityRegency,
        subdistrict,
        setSubdistrict,
        postalCode,
        setPostalCode,
        noResi,
        setNoResi,
        address,
        setAddress,
        note,
        setNote,
        isLoading,
        setIsLoading,
        orders,
        setOrders,
        orderDetail,
        setOrderDetail,
        isShipping,
        setIsShipping,
        typeFilter,
        setTypeFilter,
        isOpen,
        setIsOpen,
        isDetail,
        setIsDetail,
        handleGetOrders,
        handleGetOrderById,
        handleDetail,
        handleChangeStatus,
        handleInputResi,
        handleCloseModal,
        handleOpenModal,
        handleCreateOrder,
        handleOpenOrder,
        handleOpenDibayar,
        openDibayar,
        setOpenDibayar,
        handleChangeStatusDibayar,
        methodPayment,
        setMethodPayment, 
        tunai,
        setTunai,
        handleCashCashier,
        handleGetUserOrders
    }

    return (
        <OrderContext.Provider value={valueContext}>
            {children}
        </OrderContext.Provider>
    )
}

export default OrderContextProvider