const testKey = (e) => {
    const descRate = ['密码强度低', '密码强度低', '密码强度中', '密码强度高', '密码强度高']
    const value = e.target.value
    const include_number = /\d/.test(value)
    const include_lowercase = /[a-z]/.test(value)
    const include_uppercase = /[A-Z]/.test(value)
    const inclide_special = /[^a-zA-Z0-9]/.test(value)
    let flag = 0
    if (include_number) { flag++ }
    if (include_lowercase) { flag++ }
    if (include_uppercase) { flag++ }
    if (inclide_special) { flag++ }
    if (value.length > 6) { flag++ }
    return descRate[flag - 1]
}

export default testKey